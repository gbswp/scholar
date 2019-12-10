namespace app.net {

    export interface ErrorMsg {
        code: number;
        message: string;
        handled: boolean;
    }

    export class WebSocket extends Laya.EventDispatcher {
        private ws: any;
        private _messageHandler: any;
        private _pendingReq: Dict<PendingReqItem> = {};
        private _transId = 0;
        private _reconnectcount: number = 0;
        private _autoReconnect: boolean = true;
        private _isConnected: boolean = false;
        private _composeData: any;
        private _sendBuff: any;
        private _handled = false;
        sockeTimeoutEnable = true;//协议超时开关
        private _addr: string;

        get addr() {
            return this._addr;
        }

        get autoReconnect(): boolean {
            return this._autoReconnect;
        }

        get reconnectcount(): number {
            return this._reconnectcount;
        }

        get isConnected(): boolean {
            return this._isConnected;
        }

        set reconnectcount(v: number) {
            this._reconnectcount = v;
        }

        set messageHandler(value: any) {
            this._messageHandler = value;
        }

        connect(addr: string) {
            this._autoReconnect = true;
            this._isConnected = false;
            this._addr = addr;
            let ws = new window['WebSocket'](addr);
            ws.binaryType = "arraybuffer";
            ws.onerror = this.onError.bind(this);
            ws.onopen = this.onOpen.bind(this);
            ws.onclose = this.onClose.bind(this);
            ws.onmessage = this.onMessage.bind(this);
            this.ws = ws;
            this.clean();
        }

        //主动断线不要传参数或disconnect(false)
        disconnect(v?: boolean) {
            this._autoReconnect = v ? true : false;
            if (this._isConnected) {
                this._isConnected = false;
                this.ws.close();
                this.clean();
            }
        }

        private onOpen(e: any) {
            this._isConnected = true;
            this.ws.binaryType = 'arraybuffer';
            this.event(Laya.Event.OPEN, e);
        }

        private onMessage(e: any) {
            let buff = dcodeIO.ByteBuffer.wrap(e.data);
            while (buff.offset < buff.limit) {
                let cmdId = buff.readUInt16();
                let transId = buff.readUInt32();
                let len = buff.readUint16();
                let className = pb.idMap[cmdId];
                if (!className || !pb[className])
                    return;
                let obj = getSignletonProto(className);
                let msg = pb[className].decode(buff.readBytes(len - 8), -1, NaN, obj);
                if (className == "ComposeDataAck") {
                    this.appendComposeData(msg);
                } else {
                    if (config.isLogOut)
                        console.debug(className, msg);
                    this.handlerMessage(transId, className, msg);
                }
                // try {
                //     let msg = pb[className].decode(buff.readBytes(len - 8), -1, NaN, obj);
                //     if (className == "ComposeDataAck") {
                //         this.appendComposeData(msg);
                //     } else {
                //         if (config.isLogOut)
                //             console.debug(className, msg);
                //         this.handlerMessage(transId, className, msg);
                //     }
                // } catch (error) {
                //     //console.log(error);
                //     let pendingItem = this._pendingReq[transId];
                //     if (pendingItem) {
                //         let err = { code: -1, message: "通讯失败请重新再尝试！", handled: false };
                //         pendingItem.reject(err);
                //         pendingItem.clear();
                //         this.clearPendingReq(transId);
                //     }
                //     clearSignletonProto(className);
                //     this._composeData = null;
                // }
            }
        }

        private appendComposeData(data: pb.ComposeDataAck) {
            this._composeData || (this._composeData = new dcodeIO.ByteBuffer());
            this._composeData.append(data.data);
            data.idx == 0 && this.touchComposeData();
        }

        private touchComposeData() {
            if (this._composeData) {
                this._composeData.flip();
                let cmdId = this._composeData.readUInt16();
                let transId = this._composeData.readUInt32();
                let len = this._composeData.readUint16();
                len = this._composeData.limit;

                let className = pb.idMap[cmdId];
                if (!className || !pb[className])
                    return;

                let obj = getSignletonProto(className);
                let msg = pb[className].decode(this._composeData.readBytes(len - 8), -1, NaN, obj);
                if (config.isLogOut)
                    console.debug(className, msg);
                this.handlerMessage(transId, className, msg);
                this._composeData = null;
                // try {
                //     let msg = pb[className].decode(this._composeData.readBytes(len - 8), -1, NaN, obj);
                //     if (config.isLogOut)
                //         console.debug(className, msg);
                //     this.handlerMessage(transId, className, msg);
                //     this._composeData = null;
                // } catch (error) {
                //     //console.log(error);
                //     let pendingItem = this._pendingReq[transId];
                //     if (pendingItem) {
                //         let err = { code: -1, message: "通讯失败请重新再尝试！", handled: false };
                //         pendingItem.reject(err);
                //         pendingItem.clear();
                //         this.clearPendingReq(transId);
                //     }
                //     clearSignletonProto(className);
                //     this._composeData = null;
                // }

            }
        }

        private handlerMessage(transId: any, className: any, msg: any) {
            let pendingItem = this._pendingReq[transId];
            if (pendingItem) {
                if (msg instanceof pb.ErrorAck && msg.code != 0) {
                    let err = { code: msg.code, message: msg.message, handled: false };
                    pendingItem.reject(err);
                    Laya.timer.callLater(this, () => {
                        if (!err.handled) {
                            param.errorSpawnImpl(err.code, err.message);
                            err.handled = true;
                        }
                    })
                } else {
                    pendingItem.resolve(msg);
                }
                pendingItem.clear();
            } else {
                let method = this._messageHandler['on' + className];
                if (method) {
                    Promise.resolve().then(() => method(msg, transId));//为了与ack保持处理顺序同步
                } else if (this._messageHandler.onUnknownPacket) {
                    this._messageHandler.onUnknownPacket(msg, transId);
                }
            }
            //clearSignletonProto(className);
        }

        private onClose(e: any) {
            this._isConnected = false;
            this.clean();

            this.event(Laya.Event.CLOSE, e);
        }

        private onError(e: any) {
            this._isConnected = false;
            this.clean();
            this.event(Laya.Event.ERROR, e);
        }

        send<T extends pb.ProtoBufModel>(data: T) {
            if (!this._isConnected || this.ws.readyState > 1) {
                return 0;
            }
            let className = data['$type'].name;
            let id = pb.nameMap[className];
            let msg = data['encode']();
            // if (!this._sendBuff)
                this._sendBuff = new dcodeIO.ByteBuffer();
            // else
            //     this._sendBuff.clear();
            let buf = this._sendBuff;
            let len = msg.limit + 8;
            if (len >= 65536) {
                return -1;
            }
            buf.writeUint16(id)
            buf.writeUint32(this._transId)
            buf.writeUint16(len)
            buf.append(msg);
            buf.flip();
            let buffData = buf.toArrayBuffer();
            this.ws.send(buffData);
            if (config.isLogOut)
                console.debug(className, data)

            return this._transId;
        }

        sendAndWait<T extends pb.ProtoBufModel, U extends pb.ProtoBufModel>(data: T, resp: { new(): U }, opt?: ApiRequestOption): Promise<U> {
            return new Promise<U>((resolve: any, reject: any) => {
                let transId = ++this._transId;
                let flag = this.send(data);
                if (flag == 0) {
                    reject({ code: -1, message: '连接已断开' });
                    return;
                } else if (flag == -1) {
                    reject({ code: -1, message: '数据长度过长' });
                    return;
                }

                let pendingItem = PendingReqItem.create();
                pendingItem.transId = transId;
                pendingItem.name = data['$type'].name;
                pendingItem.open(resolve, reject, Laya.Handler.create(this, this.clearPendingReq, [transId]), opt)
                this._pendingReq[transId] = pendingItem;
            })
        }

        private clearPendingReq(transId: number) {
            delete this._pendingReq[transId];
        }

        clean(report = true) {
            this._composeData = null;
            this._sendBuff = null;
            this._transId = 0;
            for (let key in this._pendingReq) {
                let pendingItem = this._pendingReq[key];
                if (pendingItem) {
                    let error = <ErrorMsg>{ code: ErrorCode.SOCKET_DISCONNECT, message: pendingItem.name + "服务器断开连接" };
                    console.error(error);
                    report && pendingItem.reject(error);
                    pendingItem.clear();
                }
            }
            this._pendingReq = {};
            cleamSignleton();
        }

        /**协议超时 */
        onSocketTimeOut() {
            // if (!this._handled) {
            //     this._handled = true;
            //     ui.msgBox(t.C_SOCKET_TIMEOUT, MsgStyle.timeoutAlert).then(value => {
            //         if (value.result == ui.DialogResult.Yes) manager.logout();
            //         else {
            //             manager.player.reconnect();
            //         }
            //         this._handled = false;
            //     })
            // }
            // manager.player.reconnect();
        }

        reset() {
            this.offAll();
            this.disconnect();
            this._autoReconnect = true;
            this._isConnected = false;
            this._handled = false;
            this.sockeTimeoutEnable = true;
        }


    }
}
