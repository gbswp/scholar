namespace app {
    export const enum ErrorCode {
        /**服务器断开连接 */
        SOCKET_DISCONNECT = 1000,

        /**协议超时 */
        SOCKET_TIMEOUT = 1001,

        /**socket连接超时 */
        SOCKET_CONNECT_TIMEOUT = 1002,

        /**服务器状态异常 */
        SERVER_STATUS_ERROR = 1003

    }
}
