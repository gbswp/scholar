
namespace app.model {
    export class Player {
        /** 当前金币 */
        public money: number = 1000000;
        /** 当前体力 */
        public power: number = 9;
        /** 当前最大体力 */
        public maxPower: number = 10;
        /** 下次体力刷新时间 */
        public refreshTm: number = 9 * 60 * 1000;
        /** 摇钱树等级 */
        public treeLv: number = 0;
        /** 房屋等级 */
        public houseLv: number = 0;
        /** 关卡等级 */
        public stageLv: number = 1;

        constructor() {
        }
    }
}
