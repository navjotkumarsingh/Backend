const Eventemmiter = require('events')
const emitter = new Eventemmiter()

emitter.on('greet',()=>{
    console.log('helo js');
})
emitter.emit('greet');