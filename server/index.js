const http = require('http');

const server = http.createServer((req, res)=>{

    if(req.url=='/'){

        res.end('hi');
    }else if(req.url==='/download'){
        res.end('download')
    }
});

server.listen(1000, ()=>{

    console.log('server is runn5ing on 1000');
});