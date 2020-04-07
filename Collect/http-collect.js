const http = require('http');
const url = process.argv[2];

http.get(url, function (response) {
    response.setEncoding('utf8');
    let rawData = ''
    response.on('data', function (chunk) {
        rawData += chunk;
    });
    response.on('end', function () {
        console.log(rawData.length);
        console.log(rawData);
    });
    response.on('err', function (err) {
        console.log(error);
    })
})