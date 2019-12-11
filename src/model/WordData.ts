namespace app.model {
    export class WordData {
        value: string;
        row: number;
        rank: number;
        posX: number;
        posY: number;
        state: model.IdiomState = model.IdiomState.Normal;
        index:number;//在答案中的序号

        answerSelectIndex: number;
        answer: string;

        get key() {
            return this.row + "_" + this.rank;
        }

        isLock() {
            return this.state == model.IdiomState.Normal || this.state == model.IdiomState.Done;
        }

        isAnswer() {
            return this.state == model.IdiomState.Answer;
        }

        setAnswer(answerIndex: number, answer: string) {
            this.answerSelectIndex = answerIndex;
            this.answer = answer;
            this.state = model.IdiomState.Wait;
        }

        isComplted(){
            if(this.isLock()) return true;
            return this.value == this.answer;
        }


        reset() {
            this.value = "";
            this.row = 0;
            this.rank = 0;
            this.posY = 0;
            this.posX = 0;
            this.state = model.IdiomState.Normal;
            this.answerSelectIndex = -1;
            this.answer = "";
        }

    }
}
