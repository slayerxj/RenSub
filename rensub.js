const fs = require('fs');
const path = require('path');

var wantedFileName = process.argv[2];
var wantedFileNamePart1 = wantedFileName.split('%')[0];
var wantedFileNamePart2 = wantedFileName.split('%')[2];
var index = 1;

fs.readdir(__dirname, function (err, files) {
    files.forEach(function (fileName) {
        var ext = path.extname(fileName);
        if ((ext === '.srt') || (ext === '.ass')) {
            var indexStr = index < 10 ? ("0" + index.toString()) : index.toString();
            fs.renameSync(fileName, wantedFileNamePart1 + indexStr + wantedFileNamePart2 + ext);
            index++;
        }
    });
});
