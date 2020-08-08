var http=require('http')
var ex=require('express')
http.createServer(function(req,res)
{   res.writeHead(200,{'content-type':'index.html'})
    res.write("<h1>hi this is first created server</h1>")
     res.end()

}).listen(8080)

