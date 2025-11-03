const { log } = require('console')
var EventEmitter = require('events') // Import the module

var obj = new EventEmitter() // Create Object of EventEmitter

obj.addListener('marketOpen',(msg)=>{
    console.log(msg);
})

obj.emit('marketOpen','The market is Open')


// Alternative

obj.on('weather',(msg)=>{
    console.log(msg);
    
})
obj.emit('weather', 'The weather is cloudy today')

// It execute only once No matter how many times it called
obj.once('Circus', (msg)=>{
    console.log(msg);
})

obj.emit('Circus', 'Circus is housefull today')


console.log(obj.getMaxListeners()); // Checking maximum value of Listner

for(let i=0;i<9;i++){
    obj.addListener('weather', (msg)=>{
        console.log(msg);
    })
}
obj.emit("weather","The maximum listener is 10")


obj.setMaxListeners(20); // Max listener increase to 20

console.log(obj.getMaxListeners());

// FUNCTIONS.

var fun1=() =>
{
    console.log("Today is a good day");
}
var fun2=() =>
{
    console.log("Today is a another day");
}

obj.addListener('marketOpen',fun1) // Callback
obj.addListener("marketOpen",fun2)

obj.emit("marketOpen")

obj.removeListener('marketOpen',fun1)

obj.emit('marketOpen')


obj.removeAllListeners('marketOpen')
obj.emit('marketOpen')

