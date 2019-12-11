///<reference path='../../libs/LayaAir.d.ts'/>
///<reference path='../model/WordData.ts'/>
namespace app.home {
    export class MapContainer {
        showDebug = true;
        container: Laya.Component;//容器
        cellSize: number;//格子大小
        row: number;//行
        rank: number;//列
        width: number;
        height: number;
        offx: number = 0;//布局居中偏移量x
        offy: number = 0;//布局居中偏移量y
        stage: IStageInfo;//关卡配置

        answers: string[] = [];//答案
        answerList: ui.List;

        //本关卡成语数组
        idiomList: model.IdiomData[] = [];
        //字数据
        wordKeyMap: { [key: string]: model.WordData } = {};
        //成语数据
        idiomKeyMap: { [key: string]: model.IdiomData[] } = {};
        //字的显示控件
        cellKeyMap: { [key: string]: IdiomGameCellView } = {};

        selectIndex: number = -1;
        //选中项
        private _selectItem: IdiomGameCellView;
        set selectItem(value: IdiomGameCellView) {
            if (this._selectItem == value) return;
            if (this._selectItem) this._selectItem.setSelect(false)
            this._selectItem = value;
            if (this._selectItem) this._selectItem.setSelect(true);
        }
        get selectItem() {
            return this._selectItem;
        }

        constructor(container: Laya.Component, answerList: ui.List, row: number = 9, rank: number = 9) {
            this.container = container;
            this.answerList = answerList;

            this.cellSize = container.width / row;
            this.row = row;
            this.rank = rank;

            this.width = container.width;
            this.height = container.height;

            this.showMapLine();
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
        getPos(row: number, rank: number) {
            let halfSize = this.cellSize / 2;
            let tx = (rank - 1) * this.cellSize + halfSize;
            let ty = this.height - ((row - 1) * this.cellSize + halfSize);
            return [tx, ty];
        }

        /**
         *根据index取得行列
         *
         * @param {number} index
         * @returns
         * @memberof MapContainer
         */
        getRowRank(index: number) {
            let stage = this.stage;
            let row = Math.range(stage.posy[index] + this.offy, 1, 9);
            let rank = Math.range(stage.posx[index] + this.offx, 1, 9);
            return [row, rank]
        }

        getKey(row: number, rank: number) {
            return row + "_" + rank;
        }

        getWordDataByIndex(index: number) {
            let [row, rank] = this.getRowRank(index);
            return this.wordKeyMap[this.getKey(row, rank)];
        }

        getWordCellByIndex(index: number) {
            let [row, rank] = this.getRowRank(index);
            return this.cellKeyMap[this.getKey(row, rank)];
        }

        setData(data: IStageInfo) {
            this.clear();
            this.stage = data;
            this.initData();
            this.layout();
        }

        /**
         *初始化数据
         *
         * @memberof MapContainer
         */
        initData() {
            let data = this.stage;

            let xmin = Math.min(...data.posx);
            let xmax = Math.max(...data.posx);
            this.offx = Math.floor((this.rank - xmax - xmin + 1) / 2);

            let ymin = Math.min(...data.posy);
            let ymax = Math.max(...data.posy);
            this.offy = Math.ceil((this.row - ymax - ymin + 1) / 2);


            this.initIdiom();
            this.initWord();
        }

        /**
         * 初始化成语
         *
         * @memberof MapContainer
         */
        initIdiom() {
            let stage = this.stage;
            stage.idiom.forEach(str => {
                let idiom = Pool.get(Pool.IdiomData, model.IdiomData);
                idiom.value = str;
                let temp = str.split("");
                temp.forEach(word => {
                    let index = stage.word.indexOf(word);
                    if (index != -1) {
                        let [row, rank] = this.getRowRank(index);
                        let key = `${row}_${rank}`;
                        if (!idiom.wordKeyList) {
                            console.log();
                        }
                        idiom.wordKeyList.push(key);
                        if (stage.answer.indexOf(index) != -1) {
                            let temp = this.idiomKeyMap[key];
                            if (!temp) this.idiomKeyMap[key] = temp = [];
                            temp.push(idiom);
                        }
                    }
                })

                this.idiomList.push(idiom);
            })
        }

        /**
         * 初始化字
         *
         * @memberof MapContainer
         */
        initWord() {
            let stage = this.stage;
            let words = stage.word;
            for (let i = 0, len = words.length; i < len; i++) {
                let word = Pool.get(Pool.WordData, model.WordData);
                word.value = words[i];
                let [row, rank] = this.getRowRank(i);
                word.row = row;
                word.rank = rank;
                let [px, py] = this.getPos(word.row, word.rank);
                word.posX = px;
                word.posY = py;
                word.index = stage.answer.indexOf(i);
                word.index != -1 && (word.state = model.IdiomState.Answer)
                this.wordKeyMap[word.key] = word;
            }
        }



        /**
         * 生成
         *
         * @memberof MapContainer
         */
        layout() {
            _.each(this.wordKeyMap, data => {
                let cell = Pool.get(Pool.IdiomGameCellView, IdiomGameCellView);
                cell.setData(data);
                this.container.addChild(cell);
                cell.on(Laya.Event.CLICK, this, this.onCellClick, [cell]);
                this.cellKeyMap[data.key] = cell;
            })
            Laya.timer.callLater(this, this.trySelectItem);

            this.layoutAnswerList();
        }

        layoutAnswerList() {
            let data = this.stage;
            let temp = data.answer.concat().sort((a: number, b: number) => Math.random() - .5);
            this.answers = [];
            temp.forEach(index => this.answers.push(data.word[index]));
            this.answerList.data = this.answers;
        }

        protected onCellClick(cell: IdiomGameCellView) {
            let data = cell.data;
            if (!data || data.isLock()) return;
            this.selectItem = cell;
            this.selectIndex = data.index;
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
            let answer = this.stage.answer;
            let wordIndex = answer[this.selectIndex];
            if (this.selectIndex >= answer.length) {
                if (this.checkStageCompleted()) {
                    me.stageLv++;
                    this.setData(manager.fight.idioms[me.stageLv])
                } else {
                    this.selectItem = null;
                    this.selectIndex = -1;
                    this.trySelectItem();
                }
                return;
            }
            let wordData = this.getWordDataByIndex(wordIndex);
            if (wordData.isLock()) {
                this.trySelectItem();
                return;
            }

            this.selectItem = this.cellKeyMap[wordData.key];
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
            let idioms = this.getFullIdiomList(this.idiomKeyMap[data.key]);
            if (!idioms.length) {
                selectItem.refreshState();
                this.trySelectItem();
                return;
            }

            let i = 0;
            while (i < idioms.length) {
                let idiom = idioms[i]
                let bool = this.checkIdiomCompleted(idiom);
                this.updateIdiomEffect(idiom, bool)
                if (bool) {
                    Laya.timer.once(1000, this, this.trySelectItem);
                    break;
                }
                i++;
            }
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
                let wordData = this.wordKeyMap[key];
                let isAnswer = wordData.isAnswer();
                isAnswer && (isFull = false)
                return isAnswer;
            })
            return isFull;
        }

        //检测成语是否完成
        protected checkIdiomCompleted(idiom: model.IdiomData, ) {
            let completed = true;
            idiom.enum(key => {
                let wordData = this.wordKeyMap[key];
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
            let cell = this.cellKeyMap[key];
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
            let cell = this.cellKeyMap[key];
            if (!cell) return;
            let data = cell.data;
            if (!data) return;
            if (this.selectItem == cell) {
                data.state = model.IdiomState.Wrong;
                cell.refreshState();
            }
            cell.ani2.play(0, false);
        }

        //设置答案项状态
        protected setAnswerItemSelect(index: number, selected: boolean) {
            let cell = this.answerList.getCell(index) as IdiomAnswerCellUI;
            if (!cell) return;
            cell.visible = !selected;
            if (!selected) cell.ani1.play(0, false);
        }


        clear() {
            this.stage = null;
            this.offy = 0;
            this.offx = 0;
            this.selectItem = null;
            this.selectIndex = -1;
            this.answers.length = 0;

            _.each(this.wordKeyMap, value => Pool.put(Pool.WordData, value));
            this.wordKeyMap = {};

            this.idiomKeyMap = {};
            this.idiomList.forEach(value => Pool.put(Pool.IdiomData, value));
            this.idiomList.length = 0;

            _.each(this.cellKeyMap, value => {
                value.removeSelf();
                value.offAll();
                value.ani1.stop();
                value.ani2.stop();
                Pool.put(Pool.IdiomGameCellView, value);
            });
            this.cellKeyMap = {};

            Laya.timer.clearAll(this)

        }
    }
}
