var http = require('http'); 
var fs = require('fs');

var server = http.createServer(function(req,res){ 

    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("<h1>Hello World</h1><h3>Hello World</h3>");

    if(req.url == './test'){
        fs.createReadStream("./test.html").pipe(res);
    }
    res.end();
});

server.listen(9045, function(){ 
    console.log('Server is running...');
});