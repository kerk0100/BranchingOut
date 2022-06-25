var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var loginRouter = require('./routes/loginRoutes');
<<<<<<< HEAD
var reviewRouter = require('./routes/reviewRoutes');
=======
var friendsRouter = require('./routes/friends');
>>>>>>> fad4d0b (Retrieving friends list functionality)
const cors = require('cors');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
app.use('/login', loginRouter);
<<<<<<< HEAD
app.use('/reviews', reviewRouter);
=======
app.use('/friends', friendsRouter);

>>>>>>> fad4d0b (Retrieving friends list functionality)
module.exports = app;
