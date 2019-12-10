///<reference path='../../libs/LayaAir.d.ts'/>
namespace app.home {
    export class MapComponent extends Laya.Component {
        cellSize: number;//格子大小
        row: number;//排
        rank: number;//列
        showDebug = true;
        constructor(cellSize: number = 100, row: number = 9, rank: number = 9) {
            super();
            this.cellSize = cellSize;
            this.row = row;
            this.rank = rank;

            this.width = row * cellSize;
            this.height = rank * cellSize;

            this.showMapLine();
        }

        showMapLine() {
            if (!this.showDebug) return;
            let g = this.graphics;
            g.clear();
            for (let i = 0; i <= this.row; i++) {
                g.drawLine(0, i * this.cellSize, this.width, i * this.cellSize, "#ff0000");
            }

            for (let i = 0; i <= this.rank; i++) {
                g.drawLine(i * this.cellSize, 0, i * this.cellSize, this.height, "#00ff00");
            }
        }

        getPos(row: number, rank: number) {
            let halfSize = this.cellSize / 2;
            let tx = (rank - 1) * this.cellSize + halfSize;
            let ty = this.height - ((row - 1) * this.cellSize + halfSize);
            return [tx, ty];
        }

        setData(data: IStageInfo) {
            let word = data.word;
            let xmin = Math.min(...data.posx);
            let xmax = Math.max(...data.posx);
            let offx = Math.floor((this.rank - xmax - xmin + 1) / 2);
            let ymin = Math.min(...data.posy);
            let ymax = Math.max(...data.posy);
            let offy = Math.ceil((this.row - ymax - ymin + 1) / 2);
            for (let i = 0, len = word.length; i < len; i++) {
                let text = word[i];;
                let row = data.posy[i] + offy;
                let rank = data.posx[i] + offx;
                let [posx, posy] = this.getPos(row, rank);
                let label = new Laya.Label();
                label.anchorX = label.anchorY = .5;
                label.fontSize = 26;
                label.value = text;
                label.pos(posx, posy);
                this.addChild(label);
            }

        }
    }
}
