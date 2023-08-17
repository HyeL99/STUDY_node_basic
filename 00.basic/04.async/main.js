const fs = require('fs');

/* 동기 실행 - readFileSync */
// console.log('Start');

// const content = fs.readFileSync('./new.txt', 'utf-8');  //new 텍스트파일의 내용을 읽어옴
// console.log(content);

// console.log('Finish');



/* 비동기 실행 - readFile */
console.log('Start');

const content = fs.readFile('../new.txt', 'utf-8', (error, data) => console.log(data));  //new 텍스트파일의 내용을 읽어옴
// console.log(content);

console.log('Finish');