'use strict';

const express = require('express');
const hbs = require('hbs');

const router = require('./routes/routes');

const app = express();
const port = process.env.PORT || 3000;

hbs.registerPartials('./views/partials');
app.set('view engine', 'hbs')

app.use(express.static('./public'));

app.use('/', router);

app.listen(port, console.log(`Server running on port ${port}.`));
