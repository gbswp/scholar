namespace app.common {
    export class FightLevelView extends FightLevelViewUI {

        protected _modelEvents: any[] = [];

        onCreate() {
            super.onCreate();
        }

        public setData(stageLv: number) {
            this.fcLevel.value = `${stageLv}`;
        }
    }
}
