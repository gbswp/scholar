namespace app.model {
    export class WordData {
        value: string;
        row: number;
        rank: number;
        posX: number;
        posY: number;
        state: model.IdiomState = model.IdiomState.Normal;

        get isAnswer() {
            return this.state == model.IdiomState.Answer;
        }

        get key() {
            return this.row + "_" + this.rank;
        }

        canSelect() {
            return this.needAnswer();
        }

        needAnswer() {
            return this.state == model.IdiomState.Answer || this.state == model.IdiomState.Wrong;
        }

        isLock() {
            return this.state == model.IdiomState.Normal || this.state == model.IdiomState.Done;
        }

        reset() {
            this.value = "";
            this.row = 0;
            this.rank = 0;
            this.posY = 0;
            this.posX = 0;
            this.state = model.IdiomState.Normal;
        }

    }
}
