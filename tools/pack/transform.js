const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');

// 存储文件扩展名与转换器的映射，所有转换器返回buf或一个resolve为buf的Promise对象
var transformers = {};

function bypassTransformer(buf) {
    return buf;
}

function imageTransformer(buf) {
    return imagemin.buffer(buf, {
        plugins: [
            imageminMozjpeg(),
            imageminPngquant({ force: true })
        ]
    });
}

function jsonTransformer(buf) {
    return new Promise((resolve, reject) => {
        resolve(Buffer.from(JSON.stringify(JSON.parse(buf))));
    })
}

function getTransformer(extName) {
    return transformers[extName] || bypassTransformer;
}

transformers['.jpg'] = imageTransformer;
transformers['.png'] = imageTransformer;
transformers['.json'] = jsonTransformer;
transformers['.st'] = jsonTransformer;
transformers['.mc'] = jsonTransformer;
transformers['.fnt'] = jsonTransformer;

module.exports = getTransformer;
