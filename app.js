var express = require("express");
var app     = express();
var path    = require("path");


app.get('/',function(req,res){
//  res.send("hello");
  res.sendFile('/Users/markooksanen/Code/smp/index.html');
});

app.get('/feed',function(req,res){
//  res.send("hello");
  res.sendFile('/Users/markooksanen/Code/smp/hello.json');
});


app.listen(3000);



console.log("Running at Port 3000");