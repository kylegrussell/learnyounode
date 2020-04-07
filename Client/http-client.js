const http = require('http');
const url = process.argv[2];

http.get(url, function(response) {
    response.setEncoding('utf8');
    response.on('data', function (chunk) {
        console.log(chunk);
    });
    response.on('end', function() {
        //console.log('***GET Complete***')
    });
    response.on('err', function(err) {
        console.log(error);
    })
})