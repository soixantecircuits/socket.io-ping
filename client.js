var socket = require('socket.io-client')('http://localhost:8080')
var startTime
const ora = require('ora')
const spinner = ora('Starting').start()

setInterval(function() {
  socket.emit('latency', Date.now(), function(startTime) {
    var latency = Date.now() - startTime
    spinner.text = latency + 'ms'
    spinner.stopAndPersist('⚡️')
    spinner.text = 'Pinging'
    spinner.start()
  })
}, 2000)

spinner.succeed()

spinner.text = 'Pinging'
spinner.start()