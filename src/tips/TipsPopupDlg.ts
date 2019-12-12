namespace app.tips {
    export class TipsPopupDlg extends TipsPopupDlgUI implements ITipsPopupDlgUI {
        static NAME = "TipsPopupDlg";
        name = TipsPopupDlg.NAME;
        protected _modelEvents: any[] = [];

        onCreate() {
            super.onCreate();
        }

        
        
        
    }
    
    View.regViewRuntime(TipsPopupDlg.NAME, TipsPopupDlg)
    
}
