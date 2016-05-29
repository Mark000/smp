var express = require("express");
var app     = express();
var path    = require("path");


app.get('/',function(req,res){
//  res.send("hello");
  res.sendFile('index.html');
});

app.get('/feed',function(req,res){
//  res.send("hello");
  res.sendFile('hello.json');
});


app.listen(process.env.PORT || 5000);

console.log("Running");