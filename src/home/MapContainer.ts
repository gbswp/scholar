///<reference path='../../libs/LayaAir.d.ts'/>
///<reference path='../model/WordData.ts'/>
var map: app.home.MapContainer;
namespace app.home {
    export class MapContainer {
        showDebug = false;
        container: Laya.Component;//容器
        cellSize: number;//格子大小
        row: number;//行
        rank: number;//列
        width: number;
        height: number;
        offx: number = 0;//布局居中偏移量x
        offy: number = 0;//布局居中偏移量y
        // stageLv: number;
        stage: IStageInfo;
        answers: string[] = [];//答案
        answerList: ui.List;
        tapWordPosList: string[] = [];//可填入列表

        //本关卡成语数组
        idiomList: model.IdiomData[] = [];
        //字数据
        wordMapByPos: { [pos: string]: model.WordData } = {};
        //成语数据
        idiomMapByPos: { [pos: string]: model.IdiomData[] } = {};
        //字的显示控件
        cellMapByPos: { [pos: string]: IdiomGameCellView } = {};

        selectIndex: number = -1;
        //选中项
        private _selectItem: IdiomGameCellView;


        constructor(container: Laya.Component, answerList: ui.List, row: number = 9, rank: number = 9) {
            this.container = container;
            this.answerList = answerList;

            this.cellSize = container.width / row;
            this.row = row;
            this.rank = rank;

            this.width = container.width;
            this.height = container.height;

            this.showMapLine();

            map = this;
        }

        set selectItem(value: IdiomGameCellView) {
            if (this._selectItem == value) return;
            if (this._selectItem) this._selectItem.setSelect(false)
            this._selectItem = value;
            if (this._selectItem) this._selectItem.setSelect(true);
        }
        get selectItem() {
            return this._selectItem;
        }

        /**
         *现实地图格
         *
         * @returns
         * @memberof MapContainer
         */
        showMapLine() {
            if (!this.showDebug) return;
            let sp = new Laya.Sprite();
            this.container.addChildAt(sp, 0);
            let g = sp.graphics;
            g.clear();
            for (let i = 0; i <= this.row; i++) {
                g.drawLine(0, i * this.cellSize, this.width, i * this.cellSize, "#ff0000");
            }

            for (let i = 0; i <= this.rank; i++) {
                g.drawLine(i * this.cellSize, 0, i * this.cellSize, this.height, "#ff0000");
            }
        }

        /**
         *根据行列取得位置
         *
         * @param {number} row
         * @param {number} rank
         * @returns
         * @memberof MapContainer
         */
        getPos(wordPos: string): [number, number] {
            let num = +wordPos;
            let row = Math.ceil(num / this.rank);
            let rank = num % this.rank;
            let halfSize = this.cellSize / 2;
            let tx = (rank - 1) * this.cellSize + halfSize;
            let ty = (row - 1) * this.cellSize + halfSize;
            return [tx, ty];
        }

        setData(stageLv: number) {
            this.loadStage(stageLv).then((data: any) => {
                this.stage = data;
                this.clear();
                this.initData();
                this.layout();
            })

        }

        loadStage(stageLv: number) {
            return Laya.loader.loadP(`~${config.resPath}stage${stageLv}.json`)
        }

        /**
         *初始化数据
         *
         * @memberof MapContainer
         */
        initData() {
            this.initIdiom();
            this.initTapWordPosList();
        }

        /**
         *初始化可选中列表
         *
         * @memberof MapContainer
         */
        initTapWordPosList() {
            let stage = this.stage;
            let ansers = stage.answer.split(":");
            ansers = _.sortBy(ansers, pos => +pos);

            this.tapWordPosList.length = 0;
            ansers.forEach(pos => {
                this.tapWordPosList.push(pos);
            })
        }

        /**
         * 初始化成语
         *
         * @memberof MapContainer
         */
        initIdiom() {
            let stage = this.stage;
            let temp = stage.idiom.split(",");
            temp.forEach(value => this.decodeIdiom(value));
        }

        decodeIdiom(value: string) {
            let temp = value.split(":");
            let name = temp.shift();
            let idiomData = Pool.get(Pool.IdiomData, model.IdiomData);
            idiomData.name = name;
            idiomData.wordPosList = temp;
            this.idiomList.push(idiomData);

            let stage = this.stage;
            let answers = stage.answer.split(":");

            let words = name.split("");
            for (let i = 0, len = words.length; i < len; i++) {
                let wordData = Pool.get(Pool.WordData, model.WordData);
                wordData.name = words[i];
                let wordPos = temp[i];
                wordData.wordPos = wordPos;
                if (answers.indexOf(wordPos) != -1) {
                    wordData.state = model.IdiomState.Answer;
                    let arr = this.idiomMapByPos[wordPos];
                    if (!arr) this.idiomMapByPos[wordPos] = arr = [];
                    arr.push(idiomData);
                }
                this.wordMapByPos[wordPos] = wordData;
            }
        }


        /**
         * 生成
         *
         * @memberof MapContainer
         */
        layout() {
            _.each(this.wordMapByPos, data => {
                let cell = Pool.get(Pool.IdiomGameCellView, IdiomGameCellView);
                cell.setData(data);
                let [posx, posy] = this.getPos(data.wordPos);
                cell.pos(posx, posy);
                this.container.addChild(cell);
                cell.on(Laya.Event.CLICK, this, this.onCellClick, [cell]);
                this.cellMapByPos[data.wordPos] = cell;
            })
            Laya.timer.callLater(this, this.trySelectItem);

            this.layoutAnswerList();
        }

        layoutAnswerList() {
            let stage = this.stage;
            let ansers = stage.answer.split(":")
            let temp = ansers.sort((a: string, b: string) => Math.random() - .5);
            this.answers = [];
            temp.forEach(pos => this.answers.push(this.wordMapByPos[pos].name));
            this.answerList.data = this.answers;
        }

        protected onCellClick(cell: IdiomGameCellView) {
            let data = cell.data;
            if (!data || data.isLock()) return;
            this.selectItem = cell;
            this.selectIndex = this.tapWordPosList.indexOf(data.wordPos);
            if (data.state != model.IdiomState.Answer) {
                this.setAnswerItemSelect(data.answerSelectIndex, false);
                data.setAnswer(-1, "");
                data.state = model.IdiomState.Answer;
                this.selectItem.refreshState();
            }
        }

        /**
         *尝试选中
         *
         * @returns
         * @memberof MapContainer
         */
        trySelectItem() {
            this.selectIndex++;
            let temp = this.tapWordPosList;
            if (this.selectIndex >= temp.length) {
                if (this.checkStageCompleted()) {
                    this.setData(++me.stageLv)
                } else {
                    this.selectItem = null;
                    this.selectIndex = -1;
                    this.trySelectItem();
                }
                return;
            }
            let wordData = this.wordMapByPos[temp[this.selectIndex]];
            if (wordData.isLock()) {
                this.trySelectItem();
                return;
            }

            this.selectItem = this.cellMapByPos[wordData.wordPos];
        }

        //检测关卡是否完成
        checkStageCompleted() {
            let idiomList = this.idiomList;
            for (let i = 0, len = idiomList.length; i < len; i++) {
                let idiom = idiomList[i];
                if (!this.checkIdiomCompleted(idiom)) {
                    return false;
                }
            }
            return true;
        }


        //设置答案
        setAnswerSelectIndex(index: number) {
            let selectItem = this._selectItem;
            if (!selectItem) return;
            let data = selectItem.data;
            if (!data) return;
            this.setAnswerItemSelect(data.answerSelectIndex, false)
            data.setAnswer(index, this.answers[index]);
            this.setAnswerItemSelect(index, true);
            let idioms = this.getFullIdiomList(this.idiomMapByPos[data.wordPos]);
            if (!idioms.length) {
                selectItem.refreshState();
                this.trySelectItem();
                return;
            }

            let completedList: model.IdiomData[] = [];
            let wrongList: model.IdiomData[] = [];
            idioms.forEach(value => {
                this.checkIdiomCompleted(value) ? completedList.push(value) : wrongList.push(value);
            })

            completedList.forEach(value => this.updateIdiomEffect(value, true));
            wrongList.forEach(value => this.updateIdiomEffect(value, false));

            completedList.length > 0 && Laya.timer.once(500, this, this.trySelectItem);
        }

        //取得填满的成语
        protected getFullIdiomList(idioms: model.IdiomData[]) {
            let temp: model.IdiomData[] = [];
            idioms.forEach(idiom => {
                this.checkIdiomIsFull(idiom) && temp.push(idiom)
            })
            return temp;
        }

        //检测成语是否填满
        protected checkIdiomIsFull(idiom: model.IdiomData) {
            let isFull = true;
            idiom.enum(key => {
                let wordData = this.wordMapByPos[key];
                let isAnswer = wordData.isAnswer();
                isAnswer && (isFull = false)
                return isAnswer;
            })
            return isFull;
        }

        //检测成语是否完成
        protected checkIdiomCompleted(idiom: model.IdiomData) {
            let completed = true;
            idiom.enum(key => {
                let wordData = this.wordMapByPos[key];
                let bool = wordData.isComplted();
                if (!bool) completed = false;
                return !bool;
            })
            return completed;
        }

        //更新成语表现
        protected updateIdiomEffect(idiom: model.IdiomData, completed: boolean) {
            let index = 0;
            idiom.enum(key => {
                if (completed) this.updateWordCompleted(key, index);
                else this.updateWordWrong(key)
                index++;
            })
        }

        //更新字的完成效果
        protected updateWordCompleted(key: string, index: number) {
            let cell = this.cellMapByPos[key];
            if (!cell) return;
            let data = cell.data;
            if (!data) return;
            if (data.state != model.IdiomState.Done) {
                data.state = model.IdiomState.Done;
                cell.refreshState();
                Laya.timer.once(index * 80, this, () => cell.ani1.play(0, false))
            }
        }

        //更新字的错误效果
        protected updateWordWrong(key: string) {
            let cell = this.cellMapByPos[key];
            if (!cell) return;
            let data = cell.data;
            if (!data) return;
            if (data.state != model.IdiomState.Done) {
                if (this.selectItem == cell) {
                    data.state = model.IdiomState.Wrong;
                    cell.refreshState();
                }
                cell.ani2.play(0, false);
            }
        }

        //设置答案项状态
        protected setAnswerItemSelect(index: number, selected: boolean) {
            let cell = this.answerList.getCell(index) as IdiomAnswerCellUI;
            if (!cell) return;
            cell.visible = !selected;
            if (!selected) cell.ani1.play(0, false);
        }


        clear() {
            this.offy = 0;
            this.offx = 0;
            this.selectItem = null;
            this.selectIndex = -1;
            this.answers.length = 0;

            this.tapWordPosList.length = 0;

            _.each(this.wordMapByPos, value => Pool.put(Pool.WordData, value));
            this.wordMapByPos = {};

            this.idiomMapByPos = {};
            this.idiomList.forEach(value => Pool.put(Pool.IdiomData, value));
            this.idiomList.length = 0;

            _.each(this.cellMapByPos, value => {
                value.removeSelf();
                value.offAll();
                value.ani1.stop();
                value.ani2.stop();
                Pool.put(Pool.IdiomGameCellView, value);
            });
            this.cellMapByPos = {};

            Laya.timer.clearAll(this)

        }
    }
}
