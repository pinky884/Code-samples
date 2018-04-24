var express  = require('express');
var app      = express();  
app.use('/bower_components',express.static(__dirname + '/bower_components'));
app.use('/js',express.static(__dirname + '/js'));
app.use('/partial',express.static(__dirname + '/partial'));

app.get('/index.html',function(req,res){
    console.log(__dirname);
    res.sendfile('index.html');
});
  
app.listen(3000, function() {
console.log('listenning on port:3000');
});