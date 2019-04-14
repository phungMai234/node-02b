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
        if(req.method == 'GET' && req.url == '/hello')
        {
            res.write('world');
        }
        if(req.method == 'POST' && req.url == '/hello')
        {
            res.write('world created');
        }
        if(req.method == 'PUT' && req.url == '/hello')
        {
            res.write('world updated');
        }
        if(req.method == 'DELETE' && req.url == '/hello')
        {
            res.write('world deleted');
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
