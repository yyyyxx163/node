let http = require('http');
let fs = require('fs');
let tempelate = require('art-template')

let server = http.createServer();

server.on('request', (req, res) => {
    var url = req.url
    fs.readFile('tempelate.html', (err, data) => {
        if(err){
            return console.log('404')
        }
        
        fs.readdir('www', (err, data) => {
            if(err){
                return console.log('出错')
            }
            let content = '';
            data.forEach(item => {
                content += `

                `
            });
        })

        data = data.toString();
        data = data.replace('@@@', )
    })
})
