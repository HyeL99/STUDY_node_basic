const url = new URL('http://example.com/business/mart/item?category=14&id=2965');
/*
    *   http                    : 스킴(scheme) - 프로토콜(클라이언트와 서버 간의 통신 규약) 이름
    *   example.com             : 호스트(host) - 특정 서버를 나타냄
    *   /business/mart/item     : 경로(path) - 원하는 자원의 위치를 나타냄
    *   ?category=14&id=2965    : 쿼리(query) - 서버에 요청을 할 때 원하는 것을 상세하게 표현하기 위해 사용
*/

console.log(url.protocol);
console.log(url.host);
console.log(url.pathname);
console.log(url.search);