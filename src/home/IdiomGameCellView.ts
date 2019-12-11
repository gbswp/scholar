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
            this.pos(data.posX, data.posY);
            this.mouseEnabled = data.isAnswer();

            this.refreshState();
        }


        refreshState() {
            let data = this.data;
            this.imgBg.skin = r.getIdiomGameCellBg(data.state);
            if(data.state==model.IdiomState.Done){
                this.setSelect(false);
            }

            if (data.answer) this.lblText.value = data.answer;
            else this.lblText.value = data.isAnswer() ? "" : data.value + "";

            this.lblText.color = data.state == model.IdiomState.Wrong ? "#ff0000" : "#000000";

        }

        setSelect(bool: boolean) {
            this.imgSelect.visible = bool;
        }

        reset() {
            this.data = null;
        }




    }

}
