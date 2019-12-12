namespace app.tips {
    export class ReplayPopupDlg extends ReplayPopupDlgUI implements IReplayPopupDlgUI {
        static NAME = "ReplayPopupDlg";
        name = ReplayPopupDlg.NAME;
        protected _modelEvents: any[] = [];

        onCreate() {
            super.onCreate();
        }

        
        
        
    }
    
    View.regViewRuntime(ReplayPopupDlg.NAME, ReplayPopupDlg)
    
}
