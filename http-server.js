const http = require('http')

// console.log(http)
const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('welcome to our home page');
    }
    res.end(`
        <h1>Opps!</h1>
        <p>ssssssssssssssssssss</p>
        <a href='/'> back home</a>
    `);
})
server.listen(5000);

