namespace app.model {
    export class WordData {
        value: string;
        row: number;
        rank: number;
        posX: number;
        posY: number;
        isAnswer: boolean;
        state: model.IdiomState = model.IdiomState.Normal;

        get key() {
            return this.row + "_" + this.rank;
        }

        canSelect() {
            return this.needAnswer() || this.state == model.IdiomState.Right;
        }

        needAnswer() {
            return this.state == model.IdiomState.Answer || this.state == model.IdiomState.Wrong;
        }

        reset() {
            this.value = "";
            this.row = 0;
            this.rank = 0;
            this.posY = 0;
            this.posX = 0;
            this.isAnswer = false;
            this.state = model.IdiomState.Normal;
        }

    }
}
