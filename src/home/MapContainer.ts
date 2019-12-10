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

        //字数据
        wordMap: { [index: string]: model.WordData } = {};
        //成语数据
        idiomMap: { [index: string]: model.IdiomData } = {};


        //字的显示控件
        cellMap: { [index: string]: IdiomGameCellView } = {};

        //选中项
        private _selectItem: IdiomGameCellView;
        set selectItem(value: IdiomGameCellView) {
            if (this._selectItem == value) return;
            this._selectItem = value;
        }
        get selectItem() {
            return this._selectItem;
        }

        constructor(container: Laya.Component, row: number = 9, rank: number = 9) {
            this.container = container;
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
                        idiom.words.push(key);
                        if (stage.answer.indexOf(index) != -1)
                            this.idiomMap[key] = idiom;
                    }
                })
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
                word.isAnswer = stage.answer.indexOf(i) != -1;
                word.isAnswer && (word.state = model.IdiomState.Answer)
                this.wordMap[word.key] = word;
            }
        }



        /**
         * 生成
         *
         * @memberof MapContainer
         */
        layout() {
            _.each(this.wordMap, data => {
                let cell = Pool.get(Pool.IdiomGameCellView, IdiomGameCellView);
                cell.setData(data);
                this.container.addChild(cell);
            })
        }

        clear() {
            this.stage = null;
            this.offy = 0;
            this.offx = 0;
            _.each(this.wordMap, value => Pool.put(Pool.WordData, value));
            this.wordMap = {};

            _.each(this.idiomMap, value => Pool.put(Pool.IdiomData, value));
            this.idiomMap = {};

            _.each(this.cellMap, value => {
                value.removeSelf();
                Pool.put(Pool.IdiomGameCellView, value);
            });
            this.cellMap = {};

        }
    }
}
