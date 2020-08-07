var http=require('http')
http.createServer(function(req,res)
{   res.writeHead(200,{'content-type':'index.html'})
    res.write("<h1>hi t...................his is first created server</h1>")
     res.end()

}).listen(8080)
