let http = require('http');

const port = process.env.PORT;
const host = process.env.HOST;

function methodGet() {
    return 'world';

}
function methodPut() {
    return 'world updated';

}function methodPost() {
    return 'world created';

}function methodDelete() {
    return 'world deleted';

}
var server = http.createServer(function(req, res)
    {
        res.writeHead(200, {"Content-type" : "text/html"});
      
        if(req.url === '/hello' && req.method === 'GET')
        {
            methodGet();
        }
        if(req.url === '/hello' && req.method === 'POST')
        {
            methodPost();
        }
        if(req.url === '/hello' && req.method === 'PUT')
        {
            methodPut();
        }
        if(req.url === '/hello' && req.method === 'DELETE')
        {
            methodDelete();
        }
        res.end();
    }
);
server.listen(port,host, function (err) {
    if(!err)
    {
        console.log(`Your port is ${port}, ${host}`);
    }
    else
        console.log(err);
});
