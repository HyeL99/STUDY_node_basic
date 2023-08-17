const EventEmitter = require('events');
const myEmitter = new EventEmitter();
const yourEmitter = new EventEmitter();

/* 이벤트 발생시 순차진행 */
myEmitter.on('test', () => console.log('Success! - 1'));
myEmitter.on('test', () => console.log('Success! - 2'));
myEmitter.on('test', () => console.log('Success! - 3'));
yourEmitter.on('test', () => console.log('Success! - 4'));  // 실행 안됨

/* 이벤트 설정은 emit 전에 해야 제대로 실행된다. */
myEmitter.emit('test');


myEmitter.addListener('testWithParams', (arg1, arg2, arg3, arg4) => {
    console.log('Success!!', arg1, arg2, arg3, arg4);
});
myEmitter.addListener('testWithObject', (obj) => {
    console.log('Success!!', obj);
});

myEmitter.emit('testWithParams', 'apple', 'lemon', 'orange', 'banana');
myEmitter.emit('testWithObject', {type: 'text', data: 'Hello CodeIt', date: '2020-09-01'});