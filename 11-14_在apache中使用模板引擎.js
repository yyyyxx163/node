let http = require('http');
let fs = require('fs');
let template = require('art-template')

let server = http.createServer();
let wwwDir = '/Users/yyxmac/Desktop/yyx';

server.on('request', (req, res) => {
    let url = req.url;
    if(url === '/'){
        fs.readFile('./apache-template.html', (err, data) => {
            if(err){
                return res.end('读取文件失败')
            }

            fs.readdir(wwwDir, (err, files) => {
                if(err){
                    return res.end('读取文件夹失败')
                }
                let htmlStr = template.render(data.toString(), {
                    content: 'uux',
                    files: files
                })
                res.end(htmlStr);
            })
        })
    }
}).listen(3000, () => {
    console.log('开始成功，去127.0.0.1:3000访问')
})