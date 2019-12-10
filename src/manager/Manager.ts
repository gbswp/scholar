namespace app {
    export class Manager extends Laya.EventDispatcher {
        static GAME_LOCKED = "onGameLockChange";
        static DATA_LOADED = 'onDataLoaded'; // data.json全部加载完成
        static ENTER_GAME = 'onEnterGame'; // 进入游戏主场景
        static FIGHT_INITED = 'onFightInited'; // 战斗界面初始化完成
        static DISPLAY_CHANGE = 'onDisplayChange';//形象变更
        static NET_DISCONNECTED = "onNetDisconnected"; //游戏EnterGame后断线，接收到CLOSE时发此消息
        static NET_RECONNECTED = "onNetReconnected";   //游戏断线重连成功后，发此消息
        static NET_RESTARTGAME = "onNetRestartGame";   //登录界面重连后重新进入游戏
        static NET_TYPE_CHANGE = "onNetTypeChanged";//网络类型变更

        private _dataLoaded = false;

        fight: FightManager;
        init() {
            this.fight = new FightManager();
        }

        loadData(source: string, dispatch = false): Promise<void> {
            source = `~${config.resPath}${source}`;
            return new Promise<void>((resolve: any, reject: any) => {
                Laya.loader.loadP(source).then(() => {
                    Data.buildData(Laya.Loader.getRes(source));
                    Laya.loader.clearRes(source);
                    // 需要先dispatch事件，以便Player登录先数据初始化
                    if (dispatch) {
                        this._dataLoaded = true;
                        this.dispatch(Manager.DATA_LOADED);
                    }

                    resolve(0);
                })
            })
        }

        addDataLoadedListener(cb: () => void, thisObj: any) {
            if (this._dataLoaded) {
                cb.call(thisObj);
            } else {
                this.once(Manager.DATA_LOADED, thisObj, cb);
            }
        }

        get dataLoaded() {
            return this._dataLoaded;
        }

        dispatch(...types: string[]) {
            types.forEach(type => this.event(type));
        }

    }
}
var manager = new app.Manager();


