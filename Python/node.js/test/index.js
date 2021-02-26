var express = require('express');
var app = express();

app.get("/",function(req,res){
	res.send('Hello world <hr/> to 109/02/13');
});

app.get("/path",function(req,res){
	res.send('this is my path');
});
app.listen(3000,function(){
	console.log("伺服器已經啟動 >> http://192.168.1.5:3000/");
});