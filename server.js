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

console.log('Server is running...');
console.log('error4');

console.log("bbb5aaa23424234asdfdadfasd");
console.log("aaasdf");
console.log("asfdfdsfdsfdas");
console.log("i don't XXX")

