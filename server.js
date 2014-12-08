var express = require('express'),
app=express(),
staticDir = (process.env.NODE_ENV || "development") === "production" ? "dist" : "public";

app.use(express.static(__dirname + '/' + staticDir));

app.get('*', function (req, res) {
res.redirect('/index.html');
});

var server = app.listen(process.env.PORT || 8088, function() {
console.log('Listening on port %d', server.address().port);
});

