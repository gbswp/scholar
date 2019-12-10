namespace app.home {
    export class HomeDlg extends HomeDlgUI  {
        static NAME = "HomeDlg";
        name = HomeDlg.NAME;
        protected _modelEvents: any[] = [];

        onCreate() {
            super.onCreate();
            let sp = new MapComponent();
            sp.centerX = sp.centerY = 0;
            this.addChild(sp);

            sp.setData(manager.fight.idioms[0])

        }

        onCompResize(){
            super.onCompResize();
            let g = this.graphics;
            g.clear()
            g.drawRect(0,0,this.width,this.height,"#ffffff")
        }


    }

    View.regViewRuntime(HomeDlg.NAME, HomeDlg)

}
