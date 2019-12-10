class Main{
    constructor(){
        Laya.init(1280, 720, laya.webgl.WebGL);
        Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_AUTO;
        Laya.stage.screenMode = Laya.Stage.SCREEN_NONE;
        Laya.stage.alignH = Laya.Stage.ALIGN_MIDDLE;
        Laya.stage.alignV = Laya.Stage.ALIGN_CENTER;
        Laya.stage.frameRate =  "fast" ;

        config.resBase = this.slashSuffix(config.resBase || "");
        config.resPath = this.slashSuffix(config.resPath || "laya");
        config.assetsPath = this.slashSuffix(config.assetsPath || `${config.resPath}assets`);
        Laya.URL.basePath = (config.resBase ? config.resBase : Laya.URL.basePath) + config.assetsPath;
        Laya.URL.rootPath = config.resBase ? config.resBase : Laya.URL.rootPath;

        ui.registerComponents();
        ui.init({
            toastImpl: app.ui.Toast,
            loadingImpl: app.wgt.Loading,
            showMsgImpl: app.showMsg,
            messageBoxImpl: app.wgt.MsgBox,
            inputBoxImpl: app.wgt.InputMsg,
            modelEventsDispatcher: manager,
            opCheckLimit: app.checkLimit,
            adaptParam: { top: 59, bottom: 47, topSkin: "", bottomSkin: "" }
        });

        net.init({
            baseUrl: config.host,
            loadingImpl: () => { return ui.showLoading(ui.LOADING_TYPE.SOCKET) },
            errorSpawnImpl: (code, errMsg) => {
                if (code != -1 && code != -2) {
                    app.showMsg(app.utils.transferHtml(errMsg));
                }
            }
        });

        manager.init();
    }

     /** 斜杠结尾，但是空字符串不能加斜杠 **/
     private slashSuffix(str: string): string {
        return (str.length <= 0 || str.endsWith('/')) ? str : `${str}/`;
    }
}
var main = new Main();
