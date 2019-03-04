const express = require('express');
const app = express();
const methodOverride = require('method-override');
const logger = require('morgan');
const routes = require('./routes/index')

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.set('vew engine', 'hbs');
app.use(express.static(__dirname + '/public'));
app.use(logger('dev'));
app.use('/', routes);

// port
const PORT = process.env || 3000;
app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}`)
})
