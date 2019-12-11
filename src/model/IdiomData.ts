namespace app.model {
    export class IdiomData {
        value: string;
        wordKeyList: string[] = [];

        enum(cb: (key: string) => boolean | void) {
            let i = 0;
            while (i < this.wordKeyList.length) {
                if (cb(this.wordKeyList[i])) break;
                i++;
            }
        }

        reset() {
            this.value = "";
            this.wordKeyList.length = 0;
        }
    }
}
