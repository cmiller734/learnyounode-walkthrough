var net = require('net');
var portNo = process.argv[2];

var date = new Date();
var year = date.getFullYear();
var month = "0" + (1+ date.getMonth());
var day = date.getDate();
var hours = date.getHours();
var minutes = date.getMinutes();
var dateString = year + "-" + month + "-" + day + " " + hours + ":" + minutes;

var server = net.createServer(function(socket) {
    socket.write(dateString + '\n');
    socket.end();
})
server.listen(portNo);