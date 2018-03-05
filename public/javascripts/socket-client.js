const io = require('socket.io-client');

var socket = io();
socket.on('new donation', function(body) {
  document.getElementById('picture').src = body.picture;
  document.getElementById('name').innerHTML = body.name;
  document.getElementById('amount').innerHTML = body.amount;
  document.getElementById('memo').innerHTML = body.memo;
});