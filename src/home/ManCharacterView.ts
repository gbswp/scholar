namespace app.home {
    export class ManCharacterView extends ManCharacterViewUI {
        protected _modelEvents: any[] = [];
        private testNames: string[] = [
            '新屋赛',
            '哈喽你好',
            '你太帅了叭',
            '名字最长六字',
        ]
        onCreate() {
            super.onCreate();
            this.updateView();
        }

        private updateView() {
            let t = this;
            t.daiji.play();
            t.testName();
            Laya.timer.loop(10 * 1000, this, () => {
                t.testName();
            })
        }

        protected testName() {
            let random = Math.floor(_.random(0, this.testNames.length - 1));
            this.lblName.value = this.testNames[random];
            this.imgNameBg.height = this.lblName.y * 2 + this.lblName.height;
        }
    }
}
