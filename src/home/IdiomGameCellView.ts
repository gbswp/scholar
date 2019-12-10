namespace app.home {
    export class IdiomGameCellView extends IdiomGameCellViewUI  {

        protected _modelEvents: any[] = [];

        onCreate() {
            super.onCreate();
            this.anchorX = this.anchorY = .5;
            this.img_xuanzhong.visible = false;
        }

        setData(data: model.WordData) {
            this.lbl_zi.value = data.isAnswer ? "" : data.value + "";
            this.pos(data.posX, data.posY);
        }


    }

}
