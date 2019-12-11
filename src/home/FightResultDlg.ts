namespace app.home {
    export class FightResultDlg extends FightResultDlgUI implements IFightResultDlgUI {
        static NAME = "FightResultDlg";
        name = FightResultDlg.NAME;
        protected _modelEvents: any[] = [];

        onCreate() {
            super.onCreate();
        }

        
        
        onLstWordRender(cell: ui.CellView, index: number): void { }

        onBtnStartClick(e: Laya.Event): void { }
        
    }
    
    View.regViewRuntime(FightResultDlg.NAME, FightResultDlg)
    
}
