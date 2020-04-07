const net = require('net');
const strftime = require('strftime');

const server = net.createServer(function(socket) {
    socket.write(strftime('%Y-%m-%d %H:%M')+'\n');
    socket.end();
})
server.listen(process.argv[2])