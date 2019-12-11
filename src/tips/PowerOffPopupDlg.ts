namespace app.tips {
    export class PowerOffPopupDlg extends PowerOffPopupDlgUI implements IPowerOffPopupDlgUI {
        static NAME = "PowerOffPopupDlg";
        name = PowerOffPopupDlg.NAME;
        protected _modelEvents: any[] = [];

        onCreate() {
            super.onCreate();
        }

        
        
        
    }
    
    View.regViewRuntime(PowerOffPopupDlg.NAME, PowerOffPopupDlg)
    
}
