namespace app.model {
    export class IdiomData {
        value: string;
        words: string[] = [];

        reset() {
            this.value = "";
            this.words.length = 0;
        }
    }
}
