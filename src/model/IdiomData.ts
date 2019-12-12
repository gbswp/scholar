namespace app.model {
    export class IdiomData {
        name: string;
        wordPosList: string[] = [];//字序号组

        enum(cb: (index: string) => boolean | void) {
            let i = 0;
            while (i < this.wordPosList.length) {
                if (cb(this.wordPosList[i])) break;
                i++;
            }
        }

        reset() {
            this.name = "";
            this.wordPosList.length = 0;
        }
    }
}
