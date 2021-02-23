const expr = require('express');
var app = expr();

<<<<<<< HEAD
=======
app.use(require('./router'));

>>>>>>> 6a737558f5a2baad0a678cbb359f297e8507e657
app.get('/', function (req, res) {
    res.send('Hello world');
});

app.listen(8080);
