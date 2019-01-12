const express = require("express")
const path = require('path');
const serveStatic = require("serve-static")
const app = express();

app.use(serveStatic(path.join(__dirname, 'dist')));
// app.use(express.static(__dirname, 'dist/'))
// app.get(/.*/, function(req, res) {
//     res.sendFile(__dirname, "/dist/index.html")
// })

app.listen(process.env.PORT || 8080)