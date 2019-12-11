namespace app.model {
    export class IdiomData {
        value: string;
        wordKeyList: string[] = [];

        reset() {
            this.value = "";
            this.wordKeyList.length = 0;
        }
    }
}
