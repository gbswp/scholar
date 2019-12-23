namespace app.wshandler {
    // 未处理的消息
    export function onUnknownPacket(data: any, transId: number): void {
        //console.warn(data.$type.name + ' has no handler');
    }

    // 错误消息
    export function onErrorAck(data: pb.ErrorAck, transId: number): void {

    }
}
