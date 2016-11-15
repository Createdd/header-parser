"use strict";
var express=require("express");
var app=express();
var port=process.env.PORT || 3000;
var routes=require("./app/routes/index.js");

app.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

routes(app);

app.listen(port, function(){
  console.log("Listenening on port: "+port);
});
