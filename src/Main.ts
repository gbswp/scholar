class Main{
    constructor(){
        Laya.Browser.container = Laya.Browser.getElementById("layaContainer");
        Laya.init(1280, 720, laya.webgl.WebGL);
        Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_AUTO;
        Laya.stage.screenMode = Laya.Stage.SCREEN_NONE;
        Laya.stage.alignH = Laya.Stage.ALIGN_MIDDLE;
        Laya.stage.alignV = Laya.Stage.ALIGN_CENTER;
        Laya.stage.frameRate =  "fast" ;

        Laya.URL.basePath +="laya";
    }
}
var main = new Main();
