'use strict';

const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser');
const favorites = require('./routes/favorites.js')
const port = 8001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors())

app.use('/favorites', favorites);

app.use((req,res) => res.sendStatus(404));

app.listen(port, () => console.log(`Listening on port: ${port}`));

module.exports = app;
