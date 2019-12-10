
namespace app.model {
    export interface PropDef {
        name: string;
        displayName: string;
        showPercent?: boolean;
    }

    export const REFRESH_POWER_TIME: number = 10 * 60 * 1000;

    export let PropNames: { [index: string]: PropDef } = {};
    // PropNames[pb.Property] = { name: 'mPoint', displayName: '军功 ' };

}
