namespace app.wgt {
    export class Loading extends View {
        public imgRotate: ui.ImageView;
        public imgDlg1: ui.ImageView;
        private tween: TweenWrapper;
        loadingType: number;
        constructor(type: number) {
            super();
            this.loadingType = type;

            if (this.loadingType == ui.LOADING_TYPE.DIALOG) {
                this.imgDlg1 = new ui.ImageView('common.d/img_loadFont.png');
                this.imgDlg1.centerX = 0;
                this.imgDlg1.y = 120 + 30;
                this.addChild(this.imgDlg1);
            }
        }

        createChildren() {
            super.createChildren();

            this.width = this.height = 150;
            this.centerX = this.centerY = 0;
            let img = this.imgRotate = new ui.ImageView('common.d/img_loading.png');
            img.centerX = img.centerY = 0;
            this.addChild(img);

            var imgDlg2 = new ui.ImageView('common.d/img_loadbg.png');
            imgDlg2.centerX = imgDlg2.centerY = 0;
            this.addChildAt(imgDlg2, 0);
        }

        initialize() {
            super.initialize();
            let img = this.imgRotate;
            img.anchorX || (img.anchorX = 0.5);
            img.anchorY || (img.anchorY = 0.5);

            this.doAnimation();
        }

        private doAnimation() {
            this.imgRotate.rotation = 0;
            if (this.tween) this.tween.clear();
            this.tween = Laya.Tween.to(this.imgRotate, { rotation: 359 }, 1000, null, Laya.Handler.create(this, this.doAnimation), 0, true);
        }

        destroy(destroyChild = true) {
            if (this.tween) {
                this.tween.clear();
                this.tween = null;
            }
            if (this.imgDlg1) {
                this.imgDlg1.removeSelf();
                this.imgDlg1.dispose();
                this.imgDlg1 = null;
            }
            super.destroy(destroyChild);
        }
    }
}
