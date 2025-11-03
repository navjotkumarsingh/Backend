const { log } = require('console')
var EventEmitter = require('events') // Import the module

var obj = new EventEmitter() // Create Object of EventEmitter

obj.addListener('marketOpen',(msg)=>{
    console.log(msg);
})

obj.emit('marketOpen','The market is Open')
