namespace app.home {
    export class HomeDlg extends HomeDlgUI  {
        static NAME = "HomeDlg";
        name = HomeDlg.NAME;
        protected _modelEvents: any[] = [];

        onCreate() {
            super.onCreate();
            this.contentContainer.visible = true;
        }

        onBtnStartClick(e: Laya.Event): void { }

        onBtnLevelUpClick(e: Laya.Event): void { }

        onBtnRealClick(e: Laya.Event): void { }

        onBtnMoneyClick(e: Laya.Event): void { }

        onBtnRankClick(e: Laya.Event): void { }

        onBtnSignClick(e: Laya.Event): void { }

        onBtnSetClick(e: Laya.Event): void { }

        onBtnMusicClick(e: Laya.Event): void { }

        onViewWomanClick(e: Laya.Event): void { }




    }

    View.regViewRuntime(HomeDlg.NAME, HomeDlg)

}
