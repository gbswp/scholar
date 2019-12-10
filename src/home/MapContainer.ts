///<reference path='../../libs/LayaAir.d.ts'/>
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
            let word = data.word;
            let xmin = Math.min(...data.posx);
            let xmax = Math.max(...data.posx);
            this.offx = Math.floor((this.rank - xmax - xmin + 1) / 2);
            let ymin = Math.min(...data.posy);
            let ymax = Math.max(...data.posy);
            this.offy = Math.ceil((this.row - ymax - ymin + 1) / 2);
            for (let i = 0, len = word.length; i < len; i++) {
                let text = word[i];;
                let row = data.posy[i] + this.offy;
                let rank = data.posx[i] + this.offx;
                let [posx, posy] = this.getPos(row, rank);
                let label = new Laya.Label();
                label.anchorX = label.anchorY = .5;
                label.fontSize = 26;
                label.value = text;
                label.pos(posx, posy);
                this.container.addChild(label);
            }

        }
    }
}
