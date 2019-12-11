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

        refreshState(){
            let data = this.data;
            this.imgBg.skin = r.getIdiomGameCellBg(data.state);
        }

        setSelect(bool:boolean){
            this.imgSelect.visible = bool;
        }



    }

}
