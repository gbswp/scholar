namespace app.home {
    export class FightView extends FightViewUI {

        protected _modelEvents: any[] = [];

        onCreate() {
            super.onCreate();
            let map = new MapContainer(this.img_caozuo);
            let stage = manager.fight.idioms[me.stageLv]
            map.setData(stage);
            this.lstAnswer.data = stage.answer;
        }

        onLstAnswerRender(cell: IdiomAnswerCellView, index: number): void {
            let num = this.lstAnswer.getItem(index) as number;
            let stage = manager.fight.idioms[me.stageLv];
            cell.setData(stage.word[num])
        }



    }

}
