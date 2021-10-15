'use strict';
const http = require ('http');
const fs = require('fs');
const server = http.createServer (function (reqeuest,response) {
    console.log(reqeuest.method, reqeuest.url);
    if (reqeuest.url == '/style.css'){
            const css = fs.readFileSync('style.css', 'utf-8');
            response.end(css);
    } else {
        const text = fs.readFileSync('index.html', 'utf-8');
        response.end(text);
    }

})
server.listen(3000);
console.log('Server started!');
