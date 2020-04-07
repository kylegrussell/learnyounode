const fs = require('fs');
const path = require('path');

module.exports = function listDirectory (directory, extension, callback) {
    fs.readdir(directory, 'utf8', function (err, list) {
        if (err) {
            return callback(err);
        }

        let files = [];
        list.forEach(function (file) {
            if (path.extname(file) === "." + extension) {
                files.push(file);
            }
        })

        callback(null, files);
    })
}