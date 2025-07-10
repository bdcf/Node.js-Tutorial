import { EventEmitter } from 'events';

const myEmitter = new EventEmitter

function greetHandler(name) {
    console.log('Hello World ' + name);
}
function goodbyeHandler(name) {
    console.log('Goodbye World ' + name);
}
//event listeners
myEmitter.on('greet', greetHandler);
myEmitter.on('goodbye', goodbyeHandler);
//emit events
myEmitter.emit('greet', 'John');
myEmitter.emit('goodbye', 'John');
//error handling
myEmitter.on('error', (err) => {
    console.log('An Error Occurred: ', err);
});

myEmitter.emit('error', new Error('Something went Wrong.'))
