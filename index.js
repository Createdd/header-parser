
var express=require("express");//add the express module to serve static files
var app=express();//calling the express function
var port=process.env.PORT || 3000;//set the port to arguments or default 3000


app.get("/", function(req,res){
  res.send("Add /whoami");
});

/*
app.route("/whoami").get(function(req,res){
      var data = {
        "IP-Address":req.headers["host"],//displaying the ip address
        "Language": req.headers["accept-language"].split(",")[0],//displaying only the first array element
        "Operating System": req.headers["user-agent"].split(')')[0].split('(')[1]//displaying only the operating system
      };//store the header data as an object. headers are stored in a JS object with the header key as strings
      res.send(data);//send the data object
    });//set a route to "whoami" and get header data*/

app.listen(port, function(){
  console.log("Listening on port: "+port);
});//set the listening port
