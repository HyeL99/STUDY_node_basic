const http = require('http');

/*
    * server 객체에 클라이언트의 요청이 들어올 때마다 실행될 함수 *
        request:    클라이언트의 요청에 관한 객체
        response:   서버 객체가 할 응답에 관한 객체
*/
const serverResponse = (request, response) => {
    response.end('<h1>Hello World!</h1>');
}

const server = http.createServer(serverResponse);

server.listen(3000);    // 3000포트로 클라이언트의 요청이 있는지 확인