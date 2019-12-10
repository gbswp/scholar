namespace app.model {
    export class WordData {
        value: string;
        row: number;
        rank: number;
        posX: number;
        posY: number;
        isAnswer: boolean;
        // idioms: IdiomData[];

        get key() {
            return this.row + "_" + this.rank;
        }

    }
}
