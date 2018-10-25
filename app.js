var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send(" Its worked !!!!!!!");
});

app.listen(4000);
