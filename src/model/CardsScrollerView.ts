namespace app.bookstore {

    import Sprite = Laya.Sprite;
    import Skeleton = Laya.Skeleton;
    /**
     * 抽卡动画
     */
    export class CardsScrollerView extends Sprite {
        private _cards: BookResultsShowDlg;
        private _mCards: CardsMultilayerScroller;
        private _complete: Laya.Handler;

        constructor(cards: BookResultsShowDlg) {
            super();
            this._cards = cards;
            this._createCards();
            this._createScrollers();
        }

        public get type() {
            return this._cards.type;
        }

        public play(complete: Laya.Handler = null) {
            this._complete = complete;
            this._mCards.play();
            // sound.playSound(SoundConfig.SCROLLER, null, false, false, ratioData);
            // sound.playCommonSound(Data.soundCommonKey.scroller)
        }

        public _addClipClick() {
            Laya.stage.on(Laya.Event.CLICK, this, this._clip);
        }
        private _clip() {
            this._mCards.end();
        }

        public _remove() {
            // sound.stopSound(SoundConfig.SCROLLER);
            this._mCards.stop();
            Laya.stage.off(Laya.Event.CLICK, this, this._clip);
            if (this._complete) {
                this._complete.run();
            }
        }

        public clearEffects() {
            this._mCards.clearEffects();
        }

        private _createCards() {
            this._mCards = new CardsMultilayerScroller(this);
            this.addChild(this._mCards);
        }

        private _createScrollers() {
            this._mCards.x = -50;
            //0
            this._mCards.setScaleAt(0, 1);
            this._mCards.setNumAt(0, 9);
            this._mCards.setRadiusXAt(0, 300);
            this._mCards.setRadiusYAt(0, 60);
            this._mCards.setYAt(0, 350);
            this._mCards.setSpeedAt(0, -65);
            this._mCards.setWaitTimeAt(0, 3550);
            this._mCards.setRadiusBackScaleXAt(0, 0.4);
            this._mCards.setSpeedDownTimeAt(0, 3000);
            //1
            this._mCards.setScaleAt(1, 1.6);
            this._mCards.setNumAt(1, 9);
            this._mCards.setRadiusXAt(1, 400);
            this._mCards.setRadiusYAt(1, 80);
            this._mCards.setYAt(1, -100);
            this._mCards.setSpeedAt(1, 45);
            this._mCards.setWaitTimeAt(1, 3800);
            this._mCards.setRadiusBackScaleXAt(1, 0.5);
            this._mCards.setSpeedDownTimeAt(1, 2500);
            //2
            this._mCards.setScaleAt(2, 1.15);
            this._mCards.setNumAt(2, 9);
            this._mCards.setRadiusXAt(2, 350);
            this._mCards.setRadiusYAt(2, 80);
            this._mCards.setYAt(2, -400);
            this._mCards.setSpeedAt(2, -60);
            this._mCards.setWaitTimeAt(2, 3650);
            this._mCards.setRadiusBackScaleXAt(2, 0.4);
            this._mCards.setSpeedDownTimeAt(2, 3000);
            //3
            this._mCards.setScaleAt(3, 1);
            this._mCards.setNumAt(3, 7);
            this._mCards.setRadiusXAt(3, 200);
            this._mCards.setRadiusYAt(3, 50);
            this._mCards.setYAt(3, -650);
            this._mCards.setSpeedAt(3, 70);
            this._mCards.setWaitTimeAt(3, 3350);
            this._mCards.setRadiusBackScaleXAt(3, 0.35);
            this._mCards.setSpeedDownTimeAt(3, 3200);
        }
    }

    class CardsMultilayerScroller extends Sprite {
        private static readonly IN_TIME: number = 500;
        private static readonly OUT_TIME: number = 200;
        private static readonly BASE_SCALE: number = 0.8;
        private static readonly ROTATION_START: number = 60;
        private static readonly ROTATION_MIDDLE: number = 5;
        private static readonly ROTATION_END: number = 30;
        private static readonly GLOBAL_SPEED_BASE: number = 0.03;
        private static readonly MAX_LAYER: number = 4;
        private static readonly EFFECT_X: number = 100;
        private static readonly EFFECT_Y: number = 50;
        private static readonly EFFECT_SCALE: number = 1.5;
        private static readonly EFFECT_ALPHA: number = 0.8;

        private _mScroller: CardsScrollerView;
        private _effect_0: app.spine.Spine;
        private _effect_1: app.spine.Spine;

        private _effect0Context: Sprite;
        private _effect1Context: Sprite;
        private _listContext: Sprite;
        private _list: CardsMultilayerScrollerUnit[];

        private _aniState: number;
        private _timestamp: number;
        private _endCount: number;

        constructor(mScroller: CardsScrollerView) {
            super();
            this._mScroller = mScroller;
            this._aniState = -1;
            this._createLayers(CardsMultilayerScroller.MAX_LAYER);
        }

        public get type() {
            return this._mScroller.type + 1;
        }

        public play() {

            this._createEffects();

            for (let i: number = 0; i < this._list.length; i++) {
                this._list[i].play();
            }
            this._aniState = 0;
            this.scaleX = this.scaleY = 0;
            this.rotation = CardsMultilayerScroller.ROTATION_START;
            this._endCount = 0;
            this._timestamp = new Date().getTime();
            this._loop();
            Laya.timer.loop(1, this, this._loop);
        }
        private _loop() {
            if (this._aniState == 0) {
                let percent: number = (new Date().getTime() - this._timestamp) / CardsMultilayerScroller.IN_TIME;
                if (percent > 1) {
                    percent = 1;
                    this._aniState = 1;
                    this._mScroller._addClipClick();
                }
                this.scaleX = this.scaleY = percent * CardsMultilayerScroller.BASE_SCALE;
                this.rotation = CardsMultilayerScroller.ROTATION_START + (CardsMultilayerScroller.ROTATION_MIDDLE - CardsMultilayerScroller.ROTATION_START) * percent;
            }
            else if (this._aniState == 2) {
                let percent: number = (new Date().getTime() - this._timestamp) / CardsMultilayerScroller.OUT_TIME;
                if (percent > 1) {
                    percent = 1;
                    this._aniState = -1;
                    this._mScroller._remove();
                }
                this.scaleX = this.scaleY = (1 - percent) * CardsMultilayerScroller.BASE_SCALE;
                this.rotation = CardsMultilayerScroller.ROTATION_MIDDLE + (CardsMultilayerScroller.ROTATION_END - CardsMultilayerScroller.ROTATION_MIDDLE) * percent;
            }
        }

        public stop() {
            for (let i: number = 0; i < this._list.length; i++) {
                this._list[i].stop();
            }
            Laya.timer.clear(this, this._loop);

        }

        public clearEffects() {
            if (this._effect_0) {
                this._effect_0.removeSelf();
                this._effect_0 = null;
            }

            if (this._effect_1) {
                this._effect_1.removeSelf();
                this._effect_1 = null;
            }
        }
        private _createEffects() {

            if (!this._effect_1) {
                this._effect_1 = app.spine.SpinePool.getInstance().create("bookstore.d/xian_t0.sk");
                this._effect_1.scale(CardsMultilayerScroller.EFFECT_SCALE, CardsMultilayerScroller.EFFECT_SCALE);
                // this._effect_1.alpha = CardsMultilayerScroller.EFFECT_ALPHA;
                this._effect_1.pos(CardsMultilayerScroller.EFFECT_X, CardsMultilayerScroller.EFFECT_Y);
                this._effect_1.addToParent(this._effect1Context, -1, true);
                this._effect_1.play(0, true);
            }

            if (!this._effect_0) {
                this._effect_0 = app.spine.SpinePool.getInstance().create("bookstore.d/xian_t1.sk");
                this._effect_0.scale(CardsMultilayerScroller.EFFECT_SCALE, CardsMultilayerScroller.EFFECT_SCALE);
                // this._effect_0.alpha = CardsMultilayerScroller.EFFECT_ALPHA;
                this._effect_0.pos(CardsMultilayerScroller.EFFECT_X, CardsMultilayerScroller.EFFECT_Y);
                this._effect_0.addToParent(this._effect0Context, -1, true);
                this._effect_0.play(0, true);
            }

        }

        public end() {
            this._endCount++;
            if (this._aniState == 1) {
                this._aniState = 2;
                this._timestamp = new Date().getTime();
            }
        }

        public _getNumLayers() {
            return this._list.length;
        }

        public setScaleAt(layer: number, value: number) {
            this._list[layer].setScale(value);
        }

        public setNumAt(layer: number, value: number) {
            this._list[layer].setNum(value);
        }

        public setYAt(layer: number, value: number) {
            this._list[layer].setY(value);
        }

        public setRadiusXAt(layer: number, value: number) {
            this._list[layer].setRadiusX(value);
        }

        public setRadiusYAt(layer: number, value: number) {
            this._list[layer].setRadiusY(value);
        }

        public setSpeedAt(layer: number, value: number) {
            this._list[layer].setSpeed(value * CardsMultilayerScroller.GLOBAL_SPEED_BASE);
        }

        public setWaitTimeAt(layer: number, value: number) {
            this._list[layer].setWaitTime(value);
        }

        public setRadiusBackScaleXAt(layer: number, value: number) {
            this._list[layer].setRadiusBackScaleX(value);
        }

        public setSpeedDownTimeAt(layer: number, value: number) {
            this._list[layer].setSpeedDownTime(value);
        }

        private _createLayers(value: number) {

            this._effect1Context = new Sprite();
            this.addChild(this._effect1Context);

            this._listContext = new Sprite();
            this.addChild(this._listContext);
            this._list = [];
            for (let i: number = 0; i < value; i++) {
                if (!this._list[i]) {
                    this._list[i] = new CardsMultilayerScrollerUnit(this, this._listContext);
                }
                this._list[i].setIndex(i);
            }

            this._effect0Context = new Sprite();
            this.addChild(this._effect0Context);
        }
    }

    class CardsMultilayerScrollerUnit {

        private static readonly WAVE_TIME: number = 2000;
        private static readonly WAVE_HEIGHT: number = 100;
        private static readonly BACK_SCALE: number = 0.3;
        private static readonly ANI_BACK_SPEED_SCALE: number = -0.05;
        private static readonly ANI_SLOW_TIME: number = 400;
        private static readonly ANI_ENLARGE_TIME: number = 25;
        private static readonly TIME_SCALE: number = 0.018;

        private _cards: CardsMultilayerScroller;
        private _parent: Sprite;
        private _index: number;
        // private _icons: app.common.CommonMartialIconView[];
        private _icons: wgt.SkillCardView[];
        private _playState: number;
        private _playTimestamp: number;
        private _radiusX: number;
        private _radiusY: number;
        private _radiusScaleX: number;
        private _radiusBackScaleX: number;
        private _speed: number;
        private _speedScale: number;
        private _scale: number;
        private _y: number;
        private _timestamp: number;
        private _waitTime: number;
        private _waveTimestamp: number;
        private _speedDownTimestamp: number;
        private _enlargeTime: number;
        private _speedDownTime: number;
        private _aniPercent: number;
        private _aniY: number;
        private _aniRecordY: number;

        constructor(cards: CardsMultilayerScroller, parent: Sprite) {
            this._cards = cards;
            this._parent = parent;
            this._icons = [];
            this._playState = -1;
        }

        public setIndex(value: number) {
            this._index = value;
            this._enlargeTime = this._index * CardsMultilayerScrollerUnit.ANI_ENLARGE_TIME;
        }

        public setScale(value: number) {
            this._scale = value;
        }

        public setNum(value: number) {
            let mId: number = 0;
            for (let i: number = 0; i < value; i++) {
                if (!this._icons[i]) {
                    this._icons[i] = new wgt.SkillCardView();//[];//new app.common.CommonMartialIconView();
                    this._parent.addChild(this._icons[i]);
                    mId++;
                }
            }
            this._reflash();
        }

        public setRadiusX(value: number) {
            this._radiusX = value;
        }

        public setRadiusY(value: number) {
            this._radiusY = value;
        }

        public setY(value: number) {
            this._y = value;
        }

        public setWaitTime(value: number) {
            this._waitTime = value;
        }

        public setSpeed(value: number) {
            this._speed = value;
        }

        public setRadiusBackScaleX(value: number) {
            this._radiusBackScaleX = value;
        }

        public setSpeedDownTime(value: number) {
            this._speedDownTime = value;
        }

        public play(): void {
            this._playState = 0;
            this._radiusScaleX = 1;
            this._speedScale = 1;
            this._playTimestamp = 0;
            this._waveTimestamp = (new Date).getTime() + CardsMultilayerScrollerUnit.WAVE_TIME;
            this._speedDownTimestamp = (new Date()).getTime() + this._speedDownTime;
            this._timestamp = (new Date).getTime() + this._waitTime;
            for (let i: number = 0; i < this._icons.length; i++) {
                this._icons[i].alpha = 1;
            }
            this._reflash();
            this._loop();
            Laya.timer.loop(1, this, this._loop);
        }
        private _loop() {
            if (this._playState != -1) {
                if (this._playState == 0) {
                    if ((new Date).getTime() > this._timestamp) {
                        this._playState = 1;
                        this._timestamp = (new Date()).getTime() + CardsMultilayerScrollerUnit.ANI_SLOW_TIME;
                    }
                    this._ani_wave();
                }
                else if (this._playState == 1) {
                    this._state_speedSlow();
                }
                else if (this._playState == 2) {
                    this._state_enlarge();
                }
                this._ani_speedDown();
                this._ani_rotation();
            }
        }

        private _ani_wave() {
            this._aniPercent = 1 - (this._waveTimestamp - (new Date).getTime()) / CardsMultilayerScrollerUnit.WAVE_TIME;
            if ((new Date).getTime() > this._waveTimestamp) {
                this._waveTimestamp = (new Date).getTime() + CardsMultilayerScrollerUnit.WAVE_TIME;
            }
            this._aniY = this._aniRecordY = this._y + Math.sin(this._aniPercent * Math.PI) * CardsMultilayerScrollerUnit.WAVE_HEIGHT;
        }

        private _state_speedSlow() {
            let percent: number = (this._timestamp - (new Date).getTime()) / CardsMultilayerScrollerUnit.ANI_SLOW_TIME;
            if (percent < 0) {
                percent = 0;
                this._timestamp = (new Date()).getTime() + this._enlargeTime;
                this._playState = 2;
            }
            this._radiusScaleX = this._radiusBackScaleX * (1 - percent) + 1;
        }

        private _state_enlarge() {
            let percent: number = (this._timestamp - (new Date).getTime()) / this._enlargeTime;
            if (percent < 0) {
                percent = 0;
                this._playState = 3;
                this._stop();
                this._cards.end();
            }

            this._aniY = this._aniRecordY * percent;
            this._radiusScaleX = (this._radiusBackScaleX + 1) * percent;
            for (let i: number = 0; i < this._icons.length; i++) {
                this._icons[i].alpha = percent;
            }
        }


        private _ani_speedDown() {
            let percent: number = (this._speedDownTimestamp - (new Date).getTime()) / this._speedDownTime;
            if (percent < CardsMultilayerScrollerUnit.ANI_BACK_SPEED_SCALE) {
                percent = CardsMultilayerScrollerUnit.ANI_BACK_SPEED_SCALE;
            }
            this._speedScale = percent;
        }


        private _ani_rotation() {
            this._playTimestamp += this._speed * this._speedScale;
            for (let i: number = 0; i < this._icons.length; i++) {
                let angle: number = this._playTimestamp * CardsMultilayerScrollerUnit.TIME_SCALE;
                let radian: number = angle * Math.PI + Math.PI * 2 * i / this._icons.length;
                let x: number = Math.cos(radian);
                let y: number = Math.sin(radian);
                let percent: number = 1 - (1 - y) * 0.5;
                let scale: number = percent * CardsMultilayerScrollerUnit.BACK_SCALE + (1 - CardsMultilayerScrollerUnit.BACK_SCALE);
                this._icons[i].pos(x * this._radiusX * this._radiusScaleX, y * this._radiusY + this._aniY);
                this._icons[i].scaleX = this._icons[i].scaleY = scale * this._scale;
                this._icons[i].filters = app.cardsSlider.CardsSliderFilters.fish(percent);
                if (this._icons[i].parent) {
                    let level: number = Math.floor(percent * this._icons[i].parent.numChildren);
                    if (level > this._icons[i].parent.numChildren - 1) {
                        level = this._icons[i].parent.numChildren - 1;
                    }
                    this._icons[i].parent.setChildIndex(this._icons[i], level);
                }
            }
        }

        public stop(): void {
            this._playState = 1;
        }
        private _stop() {
            if (this._playState != -1) {
                this._playState = -1;
                Laya.timer.clear(this, this._loop);
            }
        }

        private _reflash() {
            for (let i: number = 0; i < this._icons.length; i++) {
                if (this._icons[i]) {
                    let recruit: Data.Recruit = Data.getRecruit(2001 + i);
                    this._icons[i].setDataById(recruit.itemID);
                    // let martialItem: Data.Item = Data.getItem(recruit.itemID);
                    // this._icons[i].imgSkill.skin = r.getItemSkin(martialItem.iconId);
                    // this._icons[i].updateView(model.MartialItem.create(Data.getCardActivity(collectIds(this._cards.type)[i % collectIds(this._cards.type).length]).martialId));
                }
            }
        }
    }
}