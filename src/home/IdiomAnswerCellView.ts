namespace app.home {
    export class IdiomAnswerCellView extends IdiomAnswerCellViewUI {

        protected _modelEvents: any[] = [];

        onCreate() {
            super.onCreate();
        }

        setData(word: string) {
            this.lbl_dizi.value = word + "";
        }


    }

}
