const http = require('http');

let users = ['Tom', 'Andy', 'Jessica', 'Paul'];

const responseFunction = (request, response) => {
    // console.log(request);
    // response.end('<h1>Hello Server!</h1>')
    const paths = request.url.split('/');
    // console.log(paths);

    if(request.url === '/'){
        response.end('<h1>Welcome!</h1>');
    } else if(request.url === '/users'){
        response.end(`<h1>${users}</h1>`);
    } else if(request.url.split('/')[1] === 'users'){
        // url: /users/1, /users/2, ...
        const userIndex = Number(request.url.split('/')[2]);
        const userName = users[userIndex - 1];
        response.end(`<h1>${userIndex}</h1>`);
    } else {
        response.end('<h1>Page Not Available</h1>');
    }
}

const server = http.createServer(responseFunction);
server.listen(3000);