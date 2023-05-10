const events = require('events');

const eventsEmitter = new events.EventEmitter();

eventsEmitter.on('notification',(data)=> {
    console.log('New Notification',data);
})

setTimeout(()=>{
    eventsEmitter.emit('notification','Sample data');
},5000);

console.log("Application Started");
