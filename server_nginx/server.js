const http = require("http")
const fs = require("fs")
const path = require("path")
const port = 3000
const server = http.createServer((req,res)=>{
  const filePath = path.join(__dirname, req.url === "/" ? "index.html":req.url)
  console.log(filePath)
  const extName = String(path.extname(filePath)).toLowerCase()
  //this for file support
  const mimeTypes = {
    '.html':'text/html',
    '.css':'text/css',
    '.js':'text/javascript',
    '.png':'text/png'
  }
  //object content types
  const contentType = mimeTypes[extName] || 'application/octet-stream'
  fs.readFile(filePath,(err,content)=>{
    if(err){
 if(err.code === "ENOENT"){
    res.writeHead(404,{"content_type":contentType})
    res.end("404:file not found Broo")
 }
    } else {
        res.writeHead(200,{'content-Type':contentType});
        res.end(content,'utf-8');
    }
  })
})

server.listen(port,()=>{
    console.log(`Server is Listening on port ${port}`)
})