'use strict';

const express = require('express');
const app = express();
const port = 8001;

app.use((req,res) => res.sendStatus(404));

app.listen(port, () => console.log(`Listening on port: ${port}`));

module.exports = app;
