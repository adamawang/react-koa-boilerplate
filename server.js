var Koa = require('koa');
var bodyParser = require('koa-body');
var Router = require('koa-router');
var serve = require('koa-static');
var path = require('path');


var router = new Router
var app = new Koa();


// serve static files
app.use(serve(path.join(__dirname, 'src')));

app.use(function* (next) {
  if(this.path !== '/home'){
    return yield next;
  }
  this.body = "hello, this is home"
})

var port = process.env.PORT || 5000;

app.listen(port)
console.log('Server listening on port: ', port);
