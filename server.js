import http from "node:http";
import {readFile} from "node:fs/promises";
import {extname,join,normalize} from "node:path";
const root=join(process.cwd(),"public");
const types={".html":"text/html; charset=utf-8",".js":"text/javascript; charset=utf-8",".css":"text/css; charset=utf-8"};
http.createServer(async(req,res)=>{
 const pathname=decodeURIComponent(new URL(req.url,"http://localhost").pathname);
 const safe=normalize(pathname).replace(/^\.\.(\/|\\|$)/,"");
 const file=join(root,safe==="/"?"index.html":safe);
 try{const data=await readFile(file);res.writeHead(200,{"Content-Type":types[extname(file)]||"application/octet-stream","X-Content-Type-Options":"nosniff"});res.end(data);}
 catch{res.writeHead(404,{"Content-Type":"text/plain"});res.end("Not found");}
}).listen(4174,"127.0.0.1",()=>console.log("Offline Flashcards: http://127.0.0.1:4174"));
