const expr = require('express');
var app = expr();

app.use(require('./router'));

app.get('/', function (req, res) {
    res.send('Hello world');
});

app.listen(8080);
