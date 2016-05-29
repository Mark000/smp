var express = require("express");
var app     = express();
var path    = require("path");


app.get('/',function(req,res){
//  res.send("hello");
  res.sendFile('index.html', { root: __dirname });
});

app.get('/feed',function(req,res){
//  res.send("hello");
  res.sendFile('hello.json', { root: __dirname });
});

app.get('/products',function(req,res){
//  res.send("hello");
  res.sendFile('products/products.html', { root: __dirname });
});

app.get('/product/examplepdp',function(req,res){
//  res.send("hello");
  res.sendFile('products/product.html', { root: __dirname });
});



app.listen(process.env.PORT || 5000);

console.log("Running");