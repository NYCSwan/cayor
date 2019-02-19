'use strict';

var express = require('express');
var app = express();
var path = require('path')

app.use(express.static('./build'));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './build', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
    console.log('Example app');
});
