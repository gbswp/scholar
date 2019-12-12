namespace app.cardsSlider {

	/**
	 * 卡片滑动滤镜。
	 */
	export class CardsSliderFilters {

		/**
		 * 颜色。
		 */
		private static COLOR: number[] = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0];

		/**
		 * 颜色池。
		 */
		private static COLOR_POOL: any = {};

		/**
		 * 黑化。
		 */
		private static BLACK: number = 0.15;

		constructor() {

		}

		/**
		 * 获取滤镜数据。
		 * 
		 * @param value 
		 */
		public static fish(value: number) {

			if(value < CardsSliderFilters.BLACK){

				value =  CardsSliderFilters.BLACK;
			}

			let key: string = value.toFixed(2);

			if (!CardsSliderFilters.COLOR_POOL[key]) {

				let color: number[] = CardsSliderFilters.COLOR.slice(0, CardsSliderFilters.COLOR.length);

				color[0] = CardsSliderFilters.COLOR[0] * value;

				color[6] = CardsSliderFilters.COLOR[6] * value;

				color[12] = CardsSliderFilters.COLOR[12] * value;

				//颜色存储。
				CardsSliderFilters.COLOR_POOL[key] = [new Laya.ColorFilter(color)];
			}

			return CardsSliderFilters.COLOR_POOL[key];
		}
	}
}