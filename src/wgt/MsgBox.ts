namespace app.wgt {
    const MINHEIGHT: number = 200;
    const SCROLLHEIGHT = 400;
    const DETAL = 150;
    export class MsgBox extends ui.Dialog {
        public divMsg: Laya.HTMLDivElement;
        public boxBtns: ui.HBox;
        public box: ui.HBox;
        public btnFirst: ui.Button;
        public btnSecond: ui.Button;
        public btnClose: ui.Button;
        // public viewBg: app.wgt.BgView;
        public chkPop: CheckBox;

        private _msg: string;
        private _msgStyle: ui.MessageBoxOption;
        private key: string;

        scroller: Scroller;

        constructor(msg: string, style?: ui.MessageBoxOption, key?: string) {
            super();
            this.showLoad = false;
            this._msg = msg;
            this._msgStyle = style || { buttons: ui.MessageButton.Yes };
            this._msgStyle.buttons || (this._msgStyle.buttons = ui.MessageButton.Yes);
            this.key = key;
            // this.defaultSkin = style.skin || wgt.MsgBoxUI;
        }

        onCreate() {
            super.onCreate();
            this.boxBtns.filterVisible = true;
            this.updateStyle();

            let divMsg = this.divMsg;

            let style = divMsg.style;
            style.fontSize = 30;
            style.color = "#ffffff";
            style.leading = 12;
            style.width = 540;
            style.wordWrap = true;
            this.box.width = Math.min(style.fontSize * this._msg.length, 540);
            this.box.height = style.fontSize * (Math.floor(this._msg.length / 18) + 1);

            divMsg.innerHTML = this._msg;
            // divMsg.x = (this.width - divMsg.contextWidth) / 2;

            let h = divMsg.contextHeight;
            if (h > MINHEIGHT) {
                this.height = divMsg.y + Math.min(divMsg.contextHeight, SCROLLHEIGHT) + DETAL;
                this.resetLayoutY();
            }

            if (h > SCROLLHEIGHT) {
                let scroller = this.scroller = new Scroller();
                scroller.bindTarget(divMsg, new Laya.Rectangle(0, 0, divMsg.width, SCROLLHEIGHT));
                scroller.setContentSize(divMsg.width, divMsg.contextHeight);
            }
        }

        protected updateStyle() {
            let style = this._msgStyle;
            // this.btnClose = this.viewBg.btnClose;
            this.btnClose && (this.btnClose.visible = style.hideClose == undefined || !style.hideClose);
            // this.viewBg.imgTitle.skin = style.title || "title.d/img_notice.png";

            this.btnFirst.visible = (style.buttons & ui.MessageButton.Yes) == ui.MessageButton.Yes;
            this.btnSecond.visible = (style.buttons & ui.MessageButton.No) == ui.MessageButton.No;

            if (style.buttonSkins) {
                let option = style.buttonSkins[0];
                if (option) {
                    option.skin && (this.btnFirst.skin = option.skin);
                    option.label && (this.btnFirst.label = option.label);
                    option.image && (this.btnFirst.image = option.image);
                }

                option = style.buttonSkins[1];
                if (option) {
                    option.skin && (this.btnSecond.skin = option.skin);
                    option.label && (this.btnSecond.label = option.label);
                    option.image && (this.btnSecond.image = option.image);
                }
            }
            this.boxBtns.refresh();
        }

        get checkSelected() {
            return this.chkPop && this.chkPop.selected;
        }

        onBtnSecondClick(e: Laya.Event): void {
            this.close(ui.DialogResult.No);

        }
        onBtnFirstClick(e: Laya.Event): void {
            this.close(ui.DialogResult.Yes);
        }

        onChkPopChange(): void {
            ui.msgBoxLimit[this.key] = this.checkSelected;
        }

        close(result: ui.DialogResult = ui.DialogResult.No, data?: any) {
            super.close(result, this.checkSelected);
        }

        destroy(destroyChild = true): void {
            this.scroller && this.scroller.dispose();
            super.destroy(destroyChild);
        }
    }

}
