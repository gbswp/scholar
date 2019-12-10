namespace app {
    export const version = '1.0.0';//开发版本号 区分正式服 提审服 每次版本更新必须更改
    export const resVersion = '1.0.0';//资源版本号 资源变更时需变更
    class VersionController {
        private _fileNames: Object;

        public getVirtualUrl(url: string): string {
            if (!url) return url;
            if (url.startsWith('http://') || url.startsWith('https://')) {
                return this.attachParam(url, 'v', resVersion);
            } else if (url.startsWith('http')) {
                url = decodeURIComponent(url);
                if (url.startsWith('http://') || url.startsWith('https://')) {
                    return this.attachParam(url, 'v', resVersion);
                }
            }
            return this.getMd5ToFileName(url);
        }

        public manifestInit() {
            if (config.resPath == "laya/") return Promise.resolve(void 0);
            if (this._fileNames) return Promise.resolve(void 0);
            let url = '~' + config.resPath + `manifest_${resVersion}.json`;
            return Laya.loader.loadP(url, Laya.Loader.TEXT).then(() => {
                let data = Laya.loader.getRes(url);
                if (data) {
                    this._fileNames = JSON.parse(data);
                    Laya.loader.clearRes(url);
                }
            }).catch(error => { })
        }


        private getMd5ToFileName(url: string): string {
            if (!this._fileNames) return this.formatUrl(url);
            var file = url.replace(config.assetsPath, "");
            if (file == url) file = url.replace(config.resPath, "");
            if (file.startsWith('~')) file = file.replace('~', '');
            let keys = file.slice(0, file.lastIndexOf('.')).split("/");
            let name = "";
            let map = this._fileNames;
            for (let i = 0, len = keys.length; i < len; i++) {
                let key = keys[i];
                map = map[key];
                if (!map) break;
                if (typeof map == "object") continue;
                name = map;
            }
            if (!name) return this.formatUrl(url);
            return url.replace(/(\/)([^/]+)(\.)(\w+)$/, "$1" + name + "$3$4");
        }

        private formatUrl(url: string) {
            if (Laya.Render.isConchApp) {
                return url;
            } else {
                return this.attachParam(url, 'v', resVersion);
            }
        }

        private attachParam(url: string, key: string, value: any) {
            if (url.indexOf('?') >= 0) {
                url = `${url}&${key}=${value}`;
            } else {
                url = `${url}?${key}=${value}`;
            }
            return url;
        }
    }

    export const vc = new VersionController();

    export function formatURL(url: string) {
        return vc.getVirtualUrl(url);
    }
}
