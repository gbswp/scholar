
namespace app.model {
    export class Player  {
        /** 当前金币 */
        public money: number = 1000000;
        /** 当前体力 */
        public power: number = 99;
        /** 当前最大体力 */
        public maxPower: number = 100;
        /** 下次体力刷新时间 */
        public refreshTm: number = 9 * 60 * 1000;

        //关卡
        stageLv: number = 1;
        constructor() {
        }
    }
}
