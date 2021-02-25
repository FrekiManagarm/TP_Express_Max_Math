var bodyParser = require('body-parser');
const expr = require('express');
var app = expr();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(require('./router'));

app.get('/', function (req, res) {
    res.send('Hello world');
});

app.listen(8080);
