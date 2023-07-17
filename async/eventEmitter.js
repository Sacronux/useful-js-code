const { EventEmitter } = require('events')


const ee = new EventEmitter();

ee.on('ping', () => {
    console.log('pong')
})

ee.emit('ping')
