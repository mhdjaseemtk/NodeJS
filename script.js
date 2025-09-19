const http = require('http')

http.createServer((req,res)=>{
    
    if(req.url=='/'){
        res.writeHead(200,{"content_Type":"text/html"})
        res.end()
    res.write("<h1>home</h1>")

    }else if(req.url=='/home'){
    res.write("<h1>mainpage</h1>")


    }

    res.end()



}).listen(3000,()=>{
console.log("running");

})


