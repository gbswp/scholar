namespace app.cardsSlider {

	import Sprite = Laya.Sprite;
	/**
	 * 卡片滑动动画。
	 */
	export class CardsSliderAnimation {

		/**
		 * 旋转参数。
		 */
		private _radiusX: number;

		private _radiusY: number;

		private _scaleMin: number;

		private _scaleMax: number;

		/**
		 * 动画。
		 */
		private _playing: boolean;

		private _playTimestamp: number;

		private _playDeltaTimestamp: number;

		private _playTop: number;

		/**
		 * 父容器。
		 */
		private _parent: Sprite;

		private _offsetX: number;

		private _offsetY: number;

		/**
		 * 武将视图。
		 */
		private _icons: Sprite[] =[];

		private _aniLength: number;

		/**
		 * 自转。
		 */
		private _selfRotation: boolean;

		/**
		 * 触摸值。
		 */
		private _touchDelta: number;

		/**
		 * 索引。
		 */
		private _index: number;

		/**
		 * 选择。
		 */
		private _selectHandler: Laya.Handler;


		private _tween: boolean;

		private _tweenDuration: number;

		private _tweenSpeed: number;

		private _tweenTimestamp: number;

		private _tweenPlayTimestamp: number;

		private _tweenEndTime: number;

		constructor() {


		}

		/**
		 * 初始化。
		 */
		public initialize(parent: Sprite) {

			this._parent = parent;

			//初始默认值。
			this._radiusX = 250;

			this._radiusY = 80;

			this._scaleMin = 0.65;

			this._scaleMax = 1.2;

			this._playTimestamp = 0;

			this._playDeltaTimestamp = 0;

			this._selfRotation = true;

			this._touchDelta = -1;

			this._tweenDuration = 250;

			this._offsetX = 0;

			this._offsetY = 0;
		}

		/**
		 * 偏移量X。
		 * 
		 * @param value 
		 */
		public setOffsetX(value: number) {

			this._offsetX = value;
		}

		/**
		 * 偏移量Y。
		 * 
		 * @param value 
		 */
		public setOffsetY(value: number) {

			this._offsetY = value;
		}

		/**
		 * 缩放倍率。
		 * 
		 * @param value 
		 */
		public setMultScaleAt(index: number, value: number) {

			this._icons[index].scaleX = this._icons[index].scaleY = this._scaleMax * value;
		}

		/**
		 * 设置旋转半径X。
		 * 
		 * @param value 
		 */
		public setRadiusX(value: number) {

			this._radiusX = value;
		}

		/**
		 * 设置旋转半径Y。
		 * 
		 * @param value 
		 */
		public setRadiusY(value: number) {

			this._radiusY = value;
		}

		/**
		 * 设置最小缩放。
		 * 
		 * @param value 
		 */
		public setScaleMin(value: number) {

			this._scaleMin = value;
		}

		/**
		 * 设置最大缩放。
		 * 
		 * @param value 
		 */
		public setScaleMax(value: number) {

			this._scaleMax = value;
		}

		/**
		 * 设置是否自转。
		 * 
		 * @param value 
		 */
		public setSelfRotation(value: boolean) {

			this._selfRotation = value;
		}

		/**
		 * 设置触摸值。
		 * 
		 * @param value 
		 */
		public setTouchDelta(value: number) {

			this._touchDelta = value;
		}

		/**
		 * 设置透明度。
		 * 
		 * @param value 
		 */
		public setIconsAlpha(value: number) {

			for (let i: number = 0; i < this._icons.length; i++) {

				this._icons[i].alpha = value;
			}
		}

		/**
		 * 添加卡片。
		 * 
		 * @param icon 
		 */
		public setIcons(icons: Sprite[], aniLength: number) {

			this._icons = icons;

			this._aniLength = aniLength;

			//不显示
			for (let i: number = 0; i < this._icons.length; i++) {

				if (i < this._aniLength) {

					if (!this._icons[i].parent) {

						// this._icons[i].xyInt(false);

						this._parent.addChild(this._icons[i]);
					}

				} else {

					this._icons[i].removeSelf();
				}
			}
		}

		/**
		 * 获取索引。
		 */
		public getIndex() {

			return this._index;
		}

		/**
		 * 动画转动。
		 * 
		 * @param value 
		 */
		public aniRotateTween(value: boolean) {

			this._tween = value;

			if (this._tween) {

				this._tweenPlayTimestamp = -1;
			}
		}

		/**
		 * 转动时长。
		 * 
		 * @param value 
		 */
		public aniTweenDuration(value: number) {

			this._tweenDuration = value;
		}


		/**
		 * 设置索引。
		 * 
		 * @param value 
		 */
		public setIndex(value: number) {

			if (this._aniLength > 0) {

				this._index = value;

				let recordPlayTimestamp: number = this._playTimestamp;

				this._tweenEndTime = 90 - this._index * 360 / this._aniLength;

				if (!this._tween) {

					this._playTimestamp = this._tweenEndTime;
					this._rotation(this._playTimestamp);

				} else {

					if (this._tweenPlayTimestamp == -1) {

						this._tweenPlayTimestamp = 0;
						this._playTimestamp = this._tweenEndTime;
						this._rotation(this._playTimestamp);

					} else {

						this._tweenTimestamp = Laya.timer.currTimer;

						this._tweenPlayTimestamp = recordPlayTimestamp;

						Laya.timer.loop(1, this, this._loopTween);

						this._loopTween();
					}
				}
			}
		}

		private _loopTween(): void {

			let percent: number = (Laya.timer.currTimer - this._tweenTimestamp) / this._tweenDuration;

			if (percent > 1) {

				percent = 1;

				Laya.timer.clear(this, this._loopTween);
			}

			this._playTimestamp = this._tweenPlayTimestamp + (this._tweenEndTime - this._tweenPlayTimestamp) * percent

			this._rotation(this._playTimestamp);
		}

		/**
		 * 选择操作。
		 * 
		 * @param value 
		 */
		public setSelectHandler(value: Laya.Handler) {

			this._selectHandler = value;
		}

		/**
		 * 播放。 
		 * 
		 */
		public play(): void {

			if (this._aniLength > 0) {

				if (!this._playing) {

					this._playing = true;

					if (this._aniLength > 1) {

						Laya.timer.frameLoop(1, this, this._loop);

						this._loop();

					} else {

						this._rotationUnit(0, Math.PI * 0.5);
					}
				}
			}
		}
		private _loop() {

			if (this._playing) {

				this._playTimestamp += this._getTimeDelta() * 0.5; //config.matchTimeScale;

				//初始顶级值。
				this._playTop = -1;

				this._index = 0;

				//旋转。
				this._rotation(this._playTimestamp);

				//回调。
				if (this._selectHandler) {

					this._selectHandler.runWith(this._index);
				}
			}
		}
		private _rotation(r: number) {

			for (let i: number = 0; i < this._aniLength; i++) {

				let radian: number = r / 180 * Math.PI + Math.PI * 2 * i / this._aniLength;

				this._rotationUnit(i, radian);
			}
		}
		private _rotationUnit(i: number, radian: number) {

			let x: number = Math.cos(radian);

			let y: number = Math.sin(radian);

			let p: number = 1 - (1 - y) * 0.5;//1-0

			let scale: number = p * this._scaleMin + (1 - this._scaleMin);

			this._icons[i].pos(x * this._radiusX, y * this._radiusY);

			this._icons[i].scaleX = this._icons[i].scaleY = this._scaleMax * scale;

			//颜色取值。
			if ((this._icons[i] as any).getFilterContext) {
				(this._icons[i] as any).getFilterContext().filters = CardsSliderFilters.fish(Math.pow(p, 3));
			} else {
				this._icons[i].filters = CardsSliderFilters.fish(Math.pow(p, 3));
			}

			//层级调整。
			if (this._icons[i].parent) {

				let level: number = Math.floor(p * this._icons[i].parent.numChildren);

				if (level > this._icons[i].parent.numChildren - 1) {

					level = this._icons[i].parent.numChildren - 1;
				}

				this._icons[i].parent.setChildIndex(this._icons[i], level);
			}

			//找到最前面的一个卡片。
			if (this._playTop < p) {

				this._playTop = p;

				this._index = i;
			}
		}

		/**
		 * 停止。 
		 * 
		 */
		public stop(): void {

			this._playing = false;

			Laya.timer.clear(this, this._loop);

			Laya.timer.clear(this, this._loopTween);
		}

		/**
		 * 清理。
		 */
		public clear() {

			for (let i: number = 0; i < this._icons.length; i++) {

				this._icons[i].removeSelf();
			}

			this.stop();
		}

		/**
		 * 获取帧间隔。
		 */
		private _getTimeDelta(): number {

			if (this._touchDelta == -1) {

				return Laya.timer.delta;
			}

			return this._touchDelta;
		}

		set tween(value: boolean) {
			this._tween = value;
		}

		get tweenTimestamp(): number {
			return this._tweenTimestamp;
		}

		set tweenTimestamp(value: number) {
			this._tweenTimestamp = value
		}

		get tweenPlayTimestamp(): number {
			return this._tweenPlayTimestamp;
		}

		set tweenPlayTimestamp(value: number) {
			this._tweenPlayTimestamp = value;
		}

		get playTimestamp(): number {
			return this._playTimestamp;
		}

		set playTimestamp(value: number) {
			this._playTimestamp = value;
		}
	}
}