var os = require('os');
console.log(os.totalmem())

var url = require('url');
var obj = url.parse('http://localhost:3000/pinglun?name=11&message=111', true)
console.log(obj)