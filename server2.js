const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()
const port = 4030

var mysql = require('mysql')

app.use(bodyParser.urlencoded({extended: true}))

app.get('/task1.html', function(req, res) {
   res.sendFile(path.join(__dirname + '/task1.html'));
 });

 app.get('/task.js',function(req,res){
   res.sendFile(path.join(__dirname + '/task.js'));
 });
app.get('/', function(req,res){
  res.redirect('task1.html');
});

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root1234',
    database: 'middleware'
});

connection.connect(function(err){
  if(err) {
    console.log('error connecting: ' + err);
    return;
  }

  console.log('Connected..');
});

app.post('/save', function(req, res){
  var convertSave = req.body;
  console.log(convertSave);
  //var sql = "INSERT INTO `converter`(`euro_amount`, `customer`, `currency`, `converted_amount`)VALUES ('"+amt+"','"+name+"','"+cur+"','"+converted+"')";
  var sql = "INSERT INTO converter SET ?"
  connection.query(sql,convertSave, function(err, result){
    if(err) console.log(err);
    res.send("save succesful");
  });
});
//connection.end();

app.listen(port)
