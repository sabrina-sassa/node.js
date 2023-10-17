//etape 1

console.log("HELLO WORLD")

//etape 2

var http =require("http")

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end(`<h1>Hello Node!!!</h1>\n`);
}).listen(3000);

console.log('Server running 3000')

//etape 3

var fs =require('fs')

var data=fs.readFileSync('welcome.txt')

console.log(data.toString())

