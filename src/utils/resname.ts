namespace r {
    export let JSON = ".json";

    export function getIdiomGameCellBg(state: number) {
        if (state == 3) state = 2;
        return `fight/youxinei_tu${state}.png`
    }

}
