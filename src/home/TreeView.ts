namespace app.home {
    export class TreeView extends TreeViewUI {
        protected _modelEvents: any[] = [];

        onCreate() {
            super.onCreate();
            this.updateView();
        }

        private updateView() {
            let t = this;

            _.forEach(t.boxTree._childs, (child: Laya.Component, index: number) => {
                let isShow = index == me.treeLv;
                child.visible = isShow;
                isShow && (child['daiji'] as Laya.FrameAnimation).play();
            })
        }
    }
}
