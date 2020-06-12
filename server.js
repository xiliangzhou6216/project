var 
   http= require('http'),
   fs= require('fs')

var server= http.createServer(function(request, response){
    console.log(request,111222)
    response.setHeader('Access-Control-Allow-Origin', '*');
    var url= request.url;
    if(url === '/api'){
        fs.readFile('./index.html',function(err, data){
            if(!err){
                response.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"});
                response.end(data);
            }else{
                throw err;
            }
        })
    }else if(url === '/api/data'){
        fs.readFile('./data.json', function(err, data){
            if(!err){
                console.log(data)
                response.writeHead(200, {"Content-Type": "text/json;charset=UTF-8"});
                response.end(data);
            }else{
                throw err;
            }
        })
    }else{
        console.log("err");
    }
});
server.listen(8080);  
// 8082 
console.log("server is running at http://127.0.0.1:8080");