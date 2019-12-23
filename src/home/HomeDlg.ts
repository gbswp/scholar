namespace app.home {
    export class HomeDlg extends HomeDlgUI {
        static NAME = "HomeDlg";
        name = HomeDlg.NAME;
        protected _modelEvents: any[] = [];

        onCreate() {
            super.onCreate();
            this.contentContainer.visible = true;

            this.updateVisible();
        }


        protected updateVisible() {
            let t = this;
            t.btnLevelUp.visible = false;
            t.viewPower.visible = false;
            t.imgMoney.visible = false;
        }
    }

    View.regViewRuntime(HomeDlg.NAME, HomeDlg)

}
