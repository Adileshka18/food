var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/tc2024')

var session = require("express-session")

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var foods = require('./routes/foods');

var app = express();

// view engine setup
app.engine('ejs',require('ejs-locals'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    secret: "Foods",
    cookie:{maxAge:60*1000},
    proxy: true,
    resave: true,
    saveUninitialized: true
    }))
    

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/foods', foods);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error',{title: 'Food'});  
});


module.exports = app;


