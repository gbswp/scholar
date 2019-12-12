namespace app.cardsSlider {

	import Point = Laya.Point;
	import Sprite = Laya.Sprite;

	/**
	 * 卡片滚动实体。
	 */
	export class CardsSliderRoller {

		private _ani: CardsSliderAnimation;

		private _parent:Sprite;

		private _touchArea:Sprite;


		private _moveOffTimeInTouch:number;

		private _moveSpeedScale:number;

		private _moveSpeedMax:number;

		private _touchHoldTime:number;

		private _local: number;

		private _unlockTime: number;

		private _moveOnce: boolean;

		private _moveTime: number;

		private _moveSpeed: number;

		private _movePrecent: number;


		constructor() {

		}

		/**
		 * 初始化。
		 * 
		 * @param parent 
		 * @param touchArea 
		 */
		public initialize(parent:Sprite, touchArea:Sprite) {

			this._parent = parent;

			this._touchArea = touchArea;


			this._moveOffTimeInTouch = 30;

			this._moveSpeedScale = 0.5;

			this._moveSpeedMax = 10;

			this._touchHoldTime = 2000;

			this._local = -1;

			this._unlockTime = -1;

			this._initCards();
		}

		/**
		 * 添加到舞台。
		 */
		public addToStage() {

			this._addTouchEvents();

			//启动动画。
			this._ani.play();
		}

		/**
		 * 从舞台移除。
		 */
		public removeFromStage() {

			this._ani.clear();

			this._removeTouchEvents();
		}

		/**
		 * 设置透明度。
		 * 
		 * @param value 
		 */
		public setAlpha(value:number){

			this._ani.setIconsAlpha(value);
		}

		/**
		 * 设置旋转半径X。
		 * 
		 * @param value 
		 */
		public setRadiusX(value: number) {

			this._ani.setRadiusX(value);
		}

		/**
		 * 设置旋转半径Y。
		 * 
		 * @param value 
		 */
		public setRadiusY(value: number) {

			this._ani.setRadiusY(value);
		}

		/**
		 * 设置最小缩放。
		 * 
		 * @param value 
		 */
		public setScaleMin(value: number) {

			this._ani.setScaleMin(value);
		}

		/**
		 * 设置最大缩放。
		 * 
		 * @param value 
		 */
		public setScaleMax(value: number) {

			this._ani.setScaleMax(value);
		}

		/**
		 * 设置是否自转。
		 * 
		 * @param value 
		 */
		public setSelfRotation(value: boolean) {

			this._ani.setSelfRotation(value);
		}

		/**
		 * 设置触摸值。
		 * 
		 * @param value 
		 */
		public setTouchDelta(value: number) {

			this._ani.setTouchDelta(value);
		}

		/**
		 * 添加卡片。
		 * 
		 * @param icon 
		 */
		public setIcons(icons: Sprite[], aniLength: number) {

			this._ani.setIcons(icons, aniLength);
		}

		/**
		 * 获取索引。
		 */
		public getIndex() {

			return this._ani.getIndex();
		}

		/**
		 * 设置索引。
		 * 
		 * @param value 
		 */
		public setIndex(value: number) {

			this._ani.setIndex(value);
		}

		/**
		 * 选择操作。
		 * 
		 * @param value 
		 */
		public setSelectHandler(value: Laya.Handler) {

			this._ani.setSelectHandler(value);
		}

		/**
		 * 添加触摸事件。
		 */
		private _addTouchEvents() {

			this._touchArea.on(Laya.Event.MOUSE_DOWN, this, this._onMouseDown);
		}
		private _onMouseDown() {

			if (this._movePrecent != 0) {

				this._ani.setTouchDelta(0);
			}

			this._local = Laya.stage.mouseX;

			this._unlockTime = -1;

			this._moveTime = -1;

			this._moveOnce = false;

			Laya.stage.on(Laya.Event.MOUSE_UP, this, this._onMouseUp);

			
			Laya.timer.loop(1, this, this._onMouseMove);
		}
		private _onMouseUp() {

			Laya.stage.off(Laya.Event.MOUSE_UP, this, this._onMouseUp);

			this._unlockTime = (new Date).getTime() + this._touchHoldTime;

			//手指触摸并且移动，才在抬起时停止；仅触摸没有移动，那么还是按照默认速度旋转。
			if (this._moveTime == -2) {

				this._ani.setTouchDelta(0);
			}
		}
		private _onMouseMove() {

			if (this._unlockTime != -1) {

				this._movePrecent = 1 - ((new Date).getTime() - this._unlockTime) / this._touchHoldTime;

				if (this._movePrecent < 0) {

					this._movePrecent = 0;

					this._ani.setTouchDelta(-1);

					Laya.timer.clear(this, this._onMouseMove);

				} else {

					if (this._moveTime != -2 && this._moveSpeed != 0) {

						if (this._moveSpeed < - this._moveSpeedMax) {

							this._moveSpeed = - this._moveSpeedMax;

						} else if (this._moveSpeed > this._moveSpeedMax) {

							this._moveSpeed = this._moveSpeedMax;
						}

						let sp: number = -(this._moveSpeed * this._moveOffTimeInTouch - Laya.timer.delta) * this._movePrecent + Laya.timer.delta;

						this._ani.setTouchDelta(sp);
					}
				}

			} else {

				this._moveSpeed = Laya.stage.mouseX - this._local;

				if (this._moveSpeed != 0) {

					this._ani.setTouchDelta(- this._moveSpeed * this._moveOffTimeInTouch);

					this._local = Laya.stage.mouseX;

					this._moveTime = -1;

					this._moveOnce = true;

				} else {

					if (this._moveOnce) {

						this._ani.setTouchDelta(0);
					}

					if (this._moveTime == -1) {

						this._moveTime = (new Date).getTime();
					}

					if ((new Date).getTime() > this._moveTime + this._moveOffTimeInTouch) {

						this._moveTime = -2;
					}
				}
			}
		}

		/**
		 * 移除触摸事件。
		 */
		private _removeTouchEvents() {

			this._touchArea.off(Laya.Event.MOUSE_DOWN, this, this._onMouseDown);

			Laya.stage.off(Laya.Event.MOUSE_UP, this, this._onMouseUp);
		}

		/**
		 * 初始化卡片。
		 */
		private _initCards() {

			this._ani = new CardsSliderAnimation();

			this._ani.initialize(this._parent);
		}
	}
}