
/*
 * Express Configuration - Mz
 */
var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');

/*
 * Express Run Server - Mz
 */
app = express();
app.use(express.static(__dirname));
var port = process.env.PORT || 8080;

/*
 * Routing - Mz
 */
app.get('*', function (req, res) {
  res.sendFile(__dirname +'/index.html')
})

app.listen(port);
console.log('MisterZik, Your server is ready for use... http://localhost:' + port);
