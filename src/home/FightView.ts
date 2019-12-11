namespace app.home {
    export class FightView extends FightViewUI {

        protected _modelEvents: any[] = [];
        map: MapContainer;

        onCreate() {
            super.onCreate();
            let map = this.map = new MapContainer(this.img_caozuo);
            let stage = manager.fight.idioms[me.stageLv]
            map.setData(stage);

            let temp = stage.answer.concat();
            temp.sort((a:number,b:number)=>Math.random() - .5);
            this.lstAnswer.data = temp;
        }

        onLstAnswerCellClick(e: Laya.Event, index: number): void {
            this.map.selectAnswerItem = this.lstAnswer.getCell(index) as IdiomAnswerCellUI;
        }


        onLstAnswerRender(cell: IdiomAnswerCellUI, index: number): void {
            let num = this.lstAnswer.getItem(index) as number;
            let stage = manager.fight.idioms[me.stageLv];
            cell.lblText.value = stage.word[num];
        }



    }

}
