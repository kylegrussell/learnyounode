const http = require('http');
const results = [];
let count = 0;

function printResults() {
    for (let i = 0; i < results.length; i++) {
        console.log(results[i]);
    }
};

function httpGet (index) {
    http.get(process.argv[2 + index], function (response) {
        response.setEncoding('utf8');
        let rawData = ''
        response.on('data', function (chunk) {
            rawData += chunk;
        });
        response.on('end', function () {
            results[index] = rawData;
            count++

            if (count == 3) {
                printResults();
            }
        });
        response.on('err', function (err) {
            console.log(error);
        })
    })
}

for (let i = 0; i < 3; i++) {
    httpGet(i); 
}
