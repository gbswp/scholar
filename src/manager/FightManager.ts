namespace app {
    export interface IStageInfo {
        answer: number[];
        hero: number;
        house: number;
        id: number;
        idiom: string[];
        levelUp: number;
        posx: number[];
        posy: number[];
        wifinum: number;
        word: string[];
    }

    export class FightManager {
        idioms: IStageInfo[] = [];

        constructor() {

        }

        loadIdioms() {
            return Laya.loader.loadP(`~${config.resPath}idiomConfig.json`).then((data: any) => {
                this.idioms = data;
            })
        }
    }
}
