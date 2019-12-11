namespace app.home {
    export class IdiomGameCellView extends IdiomGameCellViewUI {

        protected _modelEvents: any[] = [];
        data: model.WordData;
        onCreate() {
            super.onCreate();
            this.anchorX = this.anchorY = .5;
        }

        setData(data: model.WordData) {
            this.data = data;
            this.lblText.value = data.isAnswer ? "" : data.value + "";
            this.pos(data.posX, data.posY);
            this.mouseEnabled = data.isAnswer;

            this.refreshState();
        }

        setAnswer(answer: string) {
            this.lblText.value = answer + "";
        }

        refreshState() {
            let data = this.data;
            this.imgBg.skin = r.getIdiomGameCellBg(data.state);
            this.lblText.color = data.state == model.IdiomState.Wrong ? "#ff0000" : "#000000";
            if (data.state == model.IdiomState.Done) {
                this.ani1.play(0, false);
            }
        }

        setSelect(bool: boolean) {
            this.imgSelect.visible = bool;
        }




    }

}
