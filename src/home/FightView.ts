namespace app.home {
    export class FightView extends FightViewUI  {

        protected _modelEvents: any[] = [];

        onCreate() {
            super.onCreate();
            let map = new MapContainer(this.img_caozuo);
            map.setData(manager.fight.idioms[0])
        }


    }

}
