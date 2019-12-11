namespace app.home {
    export class FightView extends FightViewUI {

        protected _modelEvents: any[] = [];

        onCreate() {
            super.onCreate();
            let map  = new MapContainer(this.img_caozuo, this.lstAnswer,manager.fight.idioms);
            map.setData(me.stageLv);
        }

        onLstAnswerCellClick(e: Laya.Event, index: number): void {
            map.setAnswerSelectIndex(index);
        }


        onLstAnswerRender(cell: IdiomAnswerCellUI, index: number): void {
            let word = this.lstAnswer.getItem(index) as string;
            cell.lblText.value = word;
        }



    }

}
