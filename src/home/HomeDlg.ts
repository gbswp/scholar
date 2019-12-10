namespace app.home {
    export class HomeDlg extends HomeDlgUI implements IHomeDlgUI {
        static NAME = "HomeDlg";
        name = HomeDlg.NAME;
        protected _modelEvents: any[] = [];

        onCreate() {
            super.onCreate();
        }

        
        
        onLstRender(cell: ui.CellView, index: number): void { }

        onCbHideSelect(index: number): void { }

        onBtnDelClick(e: Laya.Event): void { }

        onBtnAddClick(e: Laya.Event): void { }
        
    }
    
    View.regViewRuntime(HomeDlg.NAME, HomeDlg)
    
}
