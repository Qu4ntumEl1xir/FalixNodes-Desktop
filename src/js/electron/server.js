var static = require('node-static');
var file = new static.Server(`${__dirname}../../../../src/html/server/`)

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        file.serve(request, response)
    }).resume()
}).listen(9999)