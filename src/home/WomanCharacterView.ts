namespace app.home {
    export class WomanCharacterView extends WomanCharacterViewUI {

        protected _modelEvents: any[] = [];

        onCreate() {
            super.onCreate();
            this.daiji.play();
        }
    }
}
