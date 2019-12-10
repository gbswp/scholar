namespace app.home {
    export class HomeDlg extends HomeDlgUI  {
        static NAME = "HomeDlg";
        name = HomeDlg.NAME;
        protected _modelEvents: any[] = [];

        onCreate() {
            super.onCreate();
            this.contentContainer.visible = false;
        }



    }

    View.regViewRuntime(HomeDlg.NAME, HomeDlg)

}
