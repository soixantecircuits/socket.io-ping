'use strict'

var port = 8080
var ip = require('ip')
var io = require('socket.io')(port)

io.on('connection', function (socket) {
  socket.on('latency', function (startTime, cb) {
    cb(startTime)
  })

  socket.on('disconnect', function () {
    io.emit('user disconnected')
  })
})

console.log(`server running on: ${ip.address()}:${port}`)