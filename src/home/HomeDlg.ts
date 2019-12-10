namespace app.home {
    export class HomeDlg extends HomeDlgUI  {
        static NAME = "HomeDlg";
        name = HomeDlg.NAME;
        protected _modelEvents: any[] = [];

        onCreate() {
            super.onCreate();
            let sp = new Laya.Sprite();
            this.addChild(sp)
            let g = sp.graphics;
            g.clear()
            g.drawRect(0,0,this.width,this.height,"#ffffff")
        }


    }

    View.regViewRuntime(HomeDlg.NAME, HomeDlg)

}
