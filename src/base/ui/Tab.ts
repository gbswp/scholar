namespace app.ui {
    export class Tab extends Laya.UIGroup {
        beforeChangeHandler: Laya.Handler = Laya.Handler.create(this, this.beforeChageCheck, [], false);
        selectSp: Laya.Component;
        tween: { clear: () => void };
        needTween = false;

        protected createItem(skin: string, label: string): Laya.Sprite {
            let btn = new Button(skin, label);
            btn.enableAnimating = false;
            return btn;
        }

        initItems(): void {
            super.initItems();
            this._items.forEach(item => {
                (item instanceof ui.Button) && (item.enableAnimating = false);
                if (item instanceof Laya.Button) {
                    item.toggle = false;
                }
            });
            this.selectSp = this.getChildByName("select") as Laya.Component;
            this.updateSelectSp();
        }

        get selectedIndex() {
            return this._selectedIndex;
        }
        set selectedIndex(value: number) {
            if (this.beforeChangeHandler && this.beforeChangeHandler.runWith(value)) {
                // this.selectedIndex = 0;
                return;
            }
            this["_$set_selectedIndex"](value);
            this.updateSelectSp();
        }

        protected updateSelectSp() {
            if (!this.selectSp) return;
            this.selectSp.visible = this._selectedIndex != -1;
            let selectItem = this.selection as Laya.Component;
            if (selectItem) {
                let pos = selectItem.x + selectItem.displayWidth / 2;
                if (this.needTween) {
                    if (this.tween) this.tween.clear();
                    this.tween = Laya.Tween.to(this.selectSp, { x: pos }, 100, Laya.Ease.cubicIn);
                } else {
                    this.selectSp.x = pos;
                }
            }
        }

        beforeChageCheck(index: number) {
            if (!this._items) return false;
            return !this._items[index];
        }

        destroy(destroyChild = true) {
            if (this.tween) {
                this.tween.clear();
                this.tween = null;
            }
            super.destroy(destroyChild)
        }
    }
}
