namespace app.home {
    export class IdiomCellView extends IdiomCellViewUI {

        protected _modelEvents: any[] = [];

        onCreate() {
            super.onCreate();
            this.anchorX = this.anchorY = .5;
        }

        setData(data: model.WordData) {
            this.lbl_dizi.value = data.isAnswer ? "" : data.value + "";
            this.pos(data.posX, data.posY);


        }


    }

}
