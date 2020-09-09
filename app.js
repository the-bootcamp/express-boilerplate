require('dotenv').config();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const favicon = require('serve-favicon');
const hbs = require('hbs');
const mongoose = require('mongoose');
const logger = require('morgan');
const path = require('path');

const app = express();

// require database configuration
require('./configs/db.config');
require('./configs/session.config')(app)

// Middleware Setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));
hbs.registerPartials(path.join(__dirname, 'views/partials'));
hbs.registerHelper("format-date", (dateString) => {
	const date = new Date(dateString);
	const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',	'November', 'December'];

	return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
});


// const index = require('./routes/index');
// app.use('/', index);
//      |  |  |
//      |  |  |
//      V  V  V
app.use('/', require('./routes/index.routes'));
app.use('/', require('./routes/recipes.routes'));


module.exports = app;
