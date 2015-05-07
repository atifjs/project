var express = require('express');
var app = express();
var routes = require('./routes')

app.set('view engine', 'ejs');

app.locals.pagetitle = "ALLAHUAKBAR";


app.get('/', routes.index);
app.get('/about', routes.about);


app.get('*', function(req,res){
    res.send('Yahan kia kar rhe ho ??');
});

var server = app.listen(3000, function(){
    console.log('Listening on port3000');
});