namespace app.home {
    export class HouseView extends HouseViewUI {

        protected _modelEvents: any[] = [];

        onCreate() {
            super.onCreate();
            this.updateView();
        }

        private updateView() {
            let t = this;

            _.forEach(t.boxHouse._childs, (child: Laya.Component, index: number) => {
                child.visible = index == me.houseLv;;
            })
        }
    }
}
