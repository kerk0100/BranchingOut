const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const loginRouter = require('./routes/loginRoutes');
const reviewRouter = require('./routes/reviewRoutes');
const friendsRouter = require('./routes/friends');
const mapRouter = require('./routes/mapRoutes');
const cors = require('cors');
const mongoose = require("mongoose");

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname, 'client', 'build')));
app.use('/login', loginRouter);
app.use('/reviews', reviewRouter);
app.use('/friends', friendsRouter);
app.use('/mapReviews', mapRouter);
app.use('/uploads', express.static('uploads'));
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });

mongoose.connect('mongodb+srv://coffee-brewsters:coffee-brewsters-basics@sandbox.vc456ti.mongodb.net/CoffeeBrewsters?retryWrites=true&w=majority');

module.exports = app;
