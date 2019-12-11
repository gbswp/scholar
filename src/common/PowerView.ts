namespace app.common {
    export class PowerView extends PowerViewUI {
        protected _modelEvents: any[] = [];
        ticker: Ticker;

        onCreate() {
            super.onCreate();
            this.updateView();
        }


        private updateView() {
            let t = this;
            let isMax = me.power >= me.maxPower;

            t.fcCount.value = `${me.power}`;
            t.imgMax.visible = isMax;
            t.lblRemainTm.visible = !isMax;

            if (!isMax) {
                t.updateRemainTime();
            } else {
                t.clearTicker();
            }
        }

        private updateRemainTime() {
            let t = this;
            let tickTime: number = 0;
            if (me.refreshTm <= 0) {
                tickTime = model.REFRESH_POWER_TIME;
            } else {
                tickTime = me.refreshTm;
            };

            t.clearTicker();
            if (tickTime > 0)
                t.ticker = Ticker.create(tickTime + Date.serverTime(), 1000, t.lblRemainTm, 'MM:ss');
            if (!t.ticker) return;

            t.ticker.onEnd = () => {
                me.power++;
                t.updateView();
            }
            t.ticker.start();
        }

        protected clearTicker() {
            this.ticker && this.ticker.dispose();
        }
    }
}
