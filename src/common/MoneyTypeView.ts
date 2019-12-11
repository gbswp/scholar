namespace app.common {
    export class MoneyTypeView extends MoneyTypeViewUI implements IMoneyTypeViewUI {
        protected _modelEvents: any[] = [];

        onCreate() {
            super.onCreate();
            this.updateView();
        }

        onBtnReceiveClick(e: Laya.Event): void { }

        public updateView() {
            let t = this;
            t.lblCount.value = utils.getDigitString(me.money);
        }
    }
}
