import { EventEmitter } from 'events';

const myEmitter = new EventEmitter();

function greetingHandler(name) {
    console.log('Welcome ' + name);
}

function goodByeHandler(name) {
    console.log('goodbye ' + name);
}

// Register event listeners
myEmitter.on('greet', greetingHandler);
myEmitter.on('goodbye', goodByeHandler);

// Emit Events
myEmitter.emit('greet', 'john');
myEmitter.emit('goodbye', 'john');

// Error handling
myEmitter.on('error', (err) => {
    console.log('An error occurred: ', err);
    
})

// Simulate Error 
myEmitter.emit('error', new Error('something went wrong'));