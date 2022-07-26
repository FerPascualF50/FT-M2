//(function () {

  //var whiteboard = window.whiteboard;
  //var whiteboard = require('./whiteboard')
  import whiteboard from './whiteboard';
  import io from 'socket.io-client'
  // Esta haciendo uso del modulo whiteboard
  //var socket = window.io(window.location.origin);

  // ESta haciendo uso del modulo socket

  
  //var io = require('socket.io-client');

  var socket = io(window.location.origin)

  socket.on('connect', function () {
    console.log('Connected!');
  });

  socket.on('load', function (strokes) {

    strokes.forEach(function (stroke) {
      var start = stroke.start;
      var end = stroke.end;
      var color = stroke.color;
      whiteboard.draw(start, end, color, false);
    });

  });

  socket.on('draw', function (start, end, color) {
    whiteboard.draw(start, end, color, false);
  });

  whiteboard.on('draw', function (start, end, color) {
    socket.emit('draw', start, end, color);
  });

//})();
