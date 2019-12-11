
namespace app.model {
    export interface PropDef {
        name: string;
        displayName: string;
        showPercent?: boolean;
    }

    export const REFRESH_POWER_TIME: number = 10 * 60 * 1000;

    export let PropNames: { [index: string]: PropDef } = {};
    // PropNames[pb.Property] = { name: 'mPoint', displayName: '军功 ' };

    export const enum IdiomState {
        Normal = 0,//普通状态
        Answer,//填空状态
        Wait,//等待校验状态
        Wrong,//错误状态
        Done//完成状态
    }

}
