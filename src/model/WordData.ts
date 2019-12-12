namespace app.model {
    export class WordData {
        name: string;
        wordPos: string;
        state: model.IdiomState = model.IdiomState.Normal;
        index: number;//在答案中的序号

        answerSelectIndex: number;
        answer: string;

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

        isComplted() {
            if (this.isLock()) return true;
            return this.name == this.answer;
        }


        reset() {
            this.name = "";
            this.state = model.IdiomState.Normal;
            this.answerSelectIndex = -1;
            this.answer = "";
        }

    }
}
