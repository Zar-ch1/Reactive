const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('customEvent', (event) => {
    console.log('custom event fired', event);
});//event Listener


setTimeout(() => {
    eventEmitter.emit('customEvent', {
        data: 'hello World'
    });//cutsom event 
}, 3000);
console.log('Done');

//eventEmitter can use multiple
eventEmitter.on('customEvent', (event) => {
    console.log('custom event fired 2', event);
});