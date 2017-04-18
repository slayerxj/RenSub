const fs = require('fs');
const path = require('path');

var videoDir = process.argv[2];
var subDir = process.argv[3];
var index = 0;

fs.readdir(videoDir, function (err, videoFiles) {
    fs.readdir(subDir, function (err, subFiles) {
        if (videoFiles.length === subFiles.length) {
            subFiles.forEach(function (fileName) {
                var videoFileName = path.parse(videoFiles[index]).name;
                var ext = path.extname(fileName);
                if ((ext === '.srt') || (ext === '.ass')) {
                    fs.renameSync(subDir + path.sep + fileName, subDir + path.sep + videoFileName + ext);
                    index++;
                }
            });
        }
    });
});
