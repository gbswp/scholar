let me: app.model.Player;
namespace app {
    export class PlayerManager {
        serverAdr: string;

        private _connResolve: any;
        private _connReject: any;
        private _connecting = false;

        constructor() {
            me = new model.Player();

            // net.connectSocket('ws://172.18.22.188:7090/ws', null);
        }

        protected startGame(reEnter?: boolean): Promise<boolean> {
            // if (!this._authed)
            //     return Promise.reject({ message: '没有登录信息' });
            console.log('开始登陆了');

            let param = new pb.EnterGameReq();

            return net.sendAndWait(param, pb.EnterGameAck).then(data => {

            }).catch(err => {
                console.error(err);
                return err;
            })
        }

        protected connectGameServer(reconnect = false) {
            return new Promise((resolve: any, reject: any) => {
                console.log('connecting');
                this._connResolve = resolve;
                this._connReject = reject;
                this.doConnectGameServer(reconnect);
            }).catch(e => {
                console.error(e);
                throw new Error(e);
            });
        }

        protected doConnectGameServer(reconnect: boolean, showTip = true) {
            this.serverAdr = `ws://${config.addr}/ws`;
            if (!this._connResolve || !this._connReject || this._connecting) return;//防止多次执行
            Laya.timer.clear(this, this.doConnectGameServer);
            this._connecting = true;
            // let instance = login.LoginTipDlg.instance;
            // instance && instance.close();
            net.ws.offAll();
            net.ws.once(Laya.Event.CLOSE, this, () => {
                // this.handleReconnect();
                net.connectSocket(this.serverAdr, app.wshandler).then(() => {
                    console.log('connected');
                    this._connResolve && this._connResolve(void (0));
                    this._connResolve = null;
                    this._connecting = false;
                }).catch(error => {
                    this._connReject && this._connReject(error);
                    this._connReject = null;
                    this._connecting = false;
                })
            });
            net.ws.disconnect(false);
            net.ws.event(Laya.Event.CLOSE);
        }
    }
}
