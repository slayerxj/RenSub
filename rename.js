const fs = require('fs');
const path = require('path');
var ssdf = "[Kamigami] Rewrite - 01 [1920x1080 x265 Ma10p AAC Sub(Chs,Cht,Jap)]";

// const dirPath = "Users\Allen\Documents\GitHub\RenSub\test\result";


fs.readdir(__dirname, function (err, files) {
    files.forEach(function (fileName, index) {
        var ext = path.extname(fileName);
        if ((ext === '.srt') || (ext === '.ass')) {
            fs.renameSync(fileName, ssdf + index.toString() + ext);
        }
    });
});
