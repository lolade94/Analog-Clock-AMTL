var express= require('express');
var app = express();

app.set('views', './public/views');
app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.render(__dirname + '/public/views/index');
});

app.listen(3000, function(){
  console.log("Listening to server!");
});
