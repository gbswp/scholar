namespace app.tips {
    export class SystemUpgradeDlg extends SystemUpgradeDlgUI implements ISystemUpgradeDlgUI {
        static NAME = "SystemUpgradeDlg";
        name = SystemUpgradeDlg.NAME;
        protected _modelEvents: any[] = [];

        onCreate() {
            super.onCreate();
        }

        
        
        
    }
    
    View.regViewRuntime(SystemUpgradeDlg.NAME, SystemUpgradeDlg)
    
}
