var glob = require('glob');
var fs = require('fs-extra');
var path = require('path');

function rename(dir) {
    var files = glob.sync(path.join(dir, '**/**'), null);
    var replaceList = { "A": 0, "B": 1, "C": 2, "D": 3, "E": 4 };
    files.forEach(file => {
        var ext = path.extname(file);
        var needRename = ext == '.png' || ext == '.json';
        if (needRename) {
            var basename = path.basename(file);
            var dirname = path.dirname(file);
            let baseArr = basename.split('.');
            let frontBase = baseArr[0];
            let newBase = replaceList[frontBase];
            if (newBase == undefined) {
                console.log("erro.....", file);
                return;
            }
            newBase += ext;
            var newPath = dirname + "/" + newBase;
            console.log("newPath.....", newPath);
            fs.rename(file, newPath);
        }
    });
}

module.exports = rename;

function rename2(dir) {
    var files = glob.sync(path.join(dir, '**/*.*'));
    files.forEach(file => {
       let newfile = file.replace(/0\.(json|png)/g, ".$1");
       fs.renameSync(file, newfile);
    })
}

if (require.main == module) {
    let dir = "C:\\Users\\ITZJ00118\\Desktop\\美术资源\\out";
    rename2(dir);
}
