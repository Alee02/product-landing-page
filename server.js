const express = require("express")
const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname, '/dist/'))
app.get(/.*/, function(req, res) {
    res.sendFile(__dirname, "/dist/index.html")
})
// const path = require('path');
// const serveStatic = require("serve-static")
// app.use(serveStatic(path.join(__dirname, 'dist')));
app.listen(port);