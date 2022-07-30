//requiring the express so we can use express on our server..............
const express = require("express");


//body file to get body elemnt from document  and we are require it so we can use it..........
const bodyParser = require("body-parser");


//adding express in a variable.................
const app = express();


//using the bodyParser inside the express......................
app.use(bodyParser.urlencoded({extended:true}));



//Simple bmiCalculator..................................

app.get("/" , function(req , res){
  res.sendFile(__dirname +"/index.html");
});


app.post("/" , function(req , res){

   var num1 = Number(req.body.num1);
   var num2 = Number(req.body.num2);
   var result = num1 + num2;

    res.send("the result is :" + result);
});





//BMI Calculator........................

app.get("/bmiCalculator" , function(req , res){

  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator" , function(req , res){

  var weight =  parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);

  var bmi =  weight / (height * height);

  res.send("Your BMI is" + bmi);
});



//init the server....................
app.listen(3000  , function(){
  console.log("hello there");
});
