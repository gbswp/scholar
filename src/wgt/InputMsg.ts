namespace app.wgt {
    export class InputMsg extends app.ui.Dialog {
        public lblTitle: Laya.Label;
        public txtInput: Laya.Input;
        public btnOk: Laya.Button;
        public closeBtn: Laya.Button;
        public lblMsg: Laya.Label;
        private _msg: string;
        private _inputStyle: ui.MessageBoxOption;

        constructor(msg?: string, style?: ui.MessageBoxOption) {
            super();
            this._msg = msg;
            this._inputStyle = style || {};
            this.update();
        }

        private update() {
            this.lblMsg.text = this._msg;
            this.lblTitle.text = this._inputStyle.title || '';
            this.btnOk.on(Laya.Event.CLICK, this, this.onBtnClick);
            this.closeBtn.on(Laya.Event.CLICK, this, this.onBtnClick);
        }

        public onBtnClick(e: Laya.Event) {
            let result = ui.DialogResult.Yes;
            switch (e.currentTarget) {
                case this.btnOk:
                    result = ui.DialogResult.Yes;
                    break;
                case this.closeBtn:
                    result = ui.DialogResult.No;
                    break;
            }
            this.close(result, this.txtInput.text);
        }
    }
}
