var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();
var path = __dirname + '/views/';

app.get('/', function (req, res) {
  res.sendFile(path + "index.html");
});

app.listen(PORT,function(){
  console.log("Live at Port" + PORT);
});
