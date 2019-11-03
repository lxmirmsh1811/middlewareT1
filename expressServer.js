const express = require('express')
const path = require('path')

const app = express()
const port = 4030

app.get('/task1.html', function(req, res) {
   res.sendFile(path.join(__dirname + '/task1.html'));
 });

 app.get('/task.js',function(req,res){
   res.sendFile(path.join(__dirname + '/task.js'));
 });
app.get('/', function(req,res){
  res.redirect('task1.html');
});

app.listen(port)
