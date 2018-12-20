let http = require('http');
let url = require('url');
let a = {
    'name' : "ding",
    'age' : "20",
    'hobby' : "eat"
}
let b ={
    'name' : "ing",
    'age' : "10",
    'hobby' : "adat"
}
var data = {
    a,
    b
   
        
}
http.createServer(function(req,res){
    res.setHeader('Access-Control-Allow-Origin', '*');//跨域了,难受的一匹,cors
    //parse用于从一个字符串中解析出json对象
    var parms = url.parse(req.url,true);
    //stringify()用于从一个对象解析出字符串
    var str = parms.query.callback + '(' + JSON.stringify(data) +')';
    res.end(str);
}).listen(8088);