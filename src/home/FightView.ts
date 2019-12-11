namespace app.home {
    export class FightView extends FightViewUI {

        protected _modelEvents: any[] = [];
        map: MapContainer;

        onCreate() {
            super.onCreate();
            let map = this.map = new MapContainer(this.img_caozuo, this.lstAnswer);
            let stage = manager.fight.idioms[me.stageLv]
            map.setData(stage);

        }

        onLstAnswerCellClick(e: Laya.Event, index: number): void {
            this.map.setAnswerSelectIndex(index);
        }


        onLstAnswerRender(cell: IdiomAnswerCellUI, index: number): void {
            let word = this.lstAnswer.getItem(index) as string;
            cell.lblText.value = word;
        }



    }

}
