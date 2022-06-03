const EventEmitter = require ('events');
const myEmitter = EventEmitter();

myEmitter.on('newSale', ()=>{
    console.log('There was a new sale!');

})
myEmitter.on('newSale', ()=>{
    console.log('Customer name: John Doe');

})



myEmitter.emit('newSale');
