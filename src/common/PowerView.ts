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

            let serveTime = Date.serverTime();
            if (t.ticker) {
                t.ticker.dispose();
            }
            if (tickTime - serveTime > 0)
                t.ticker = Ticker.create(tickTime, 1000, t.lblRemainTm, 'MM:ss');
            if (t.ticker) {
                t.ticker.onEnd = () => {
                    t.updateView();
                }
                t.ticker.start();
            }
        }
    }
}
