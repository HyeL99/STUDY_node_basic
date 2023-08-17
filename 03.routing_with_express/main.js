const express = require('express');

const app = express();  // express로 만든 객체는 보통 app이라고 이름을 붙임.

let users = ['Tom', 'Andy', 'Jessica', 'Paul', 'Alice', 'Sally'];

app.get('/', (req, res) => {
    res.end('<h1>Welcome!</h1>');
})
app.get('/users', (req, res) => {
    res.end(`<h1>${users}</h1>`);
})
app.get('/users/:id', (req, res) => {
    const userIndex = req.params.id - 1;
    res.end(`<h1>${users[userIndex]}</h1>`);
})
app.get('*', (req, res) => {
    res.end('<h1>Page Not Available</h1>');
})

app.listen(3000);