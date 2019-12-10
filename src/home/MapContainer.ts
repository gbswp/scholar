///<reference path='../../libs/LayaAir.d.ts'/>
///<reference path='../model/WordData.ts'/>
namespace app.home {
    export class MapContainer {
        showDebug = true;
        container: Laya.Component;
        cellSize: number;//格子大小
        row: number;//排
        rank: number;//列
        width: number;
        height: number;
        offx: number = 0;
        offy: number = 0;
        stage: IStageInfo;
        // words: model.WordData[] = [];
        wordMap: { [index: string]: model.WordData } = {};
        cellMap: { [index: string]: IdiomCellView } = {}

        constructor(container: Laya.Component, row: number = 9, rank: number = 9) {
            this.container = container;
            this.cellSize = container.width / row;
            this.row = row;
            this.rank = rank;

            this.width = container.width;
            this.height = container.height;

            this.showMapLine();
        }

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

        getPos(row: number, rank: number) {
            let halfSize = this.cellSize / 2;
            let tx = (rank - 1) * this.cellSize + halfSize;
            let ty = this.height - ((row - 1) * this.cellSize + halfSize);
            return [tx, ty];
        }

        setData(data: IStageInfo) {
            this.stage = data;
            this.initData();
            this.layout();
        }

        initData() {
            let data = this.stage;

            let xmin = Math.min(...data.posx);
            let xmax = Math.max(...data.posx);
            this.offx = Math.floor((this.rank - xmax - xmin + 1) / 2);

            let ymin = Math.min(...data.posy);
            let ymax = Math.max(...data.posy);
            this.offy = Math.ceil((this.row - ymax - ymin + 1) / 2);

            let words = data.word;
            for (let i = 0, len = words.length; i < len; i++) {
                let word = new model.WordData();
                word.value = words[i];
                word.row = data.posy[i] + this.offy;
                word.rank = data.posx[i] + this.offx;
                let [px, py] = this.getPos(word.row, word.rank);
                word.posX = px;
                word.posY = py;
                word.isAnswer = data.answer.indexOf(i) != -1;
                // this.words.push(word);
                this.wordMap[word.key] = word;
            }
        }

        layout() {
            _.each(this.wordMap, data => {
                let cell = Pool.get(Pool.IdiomCellView, IdiomCellView);
                cell.setData(data);
                this.container.addChild(cell);
            })
        }
    }
}
