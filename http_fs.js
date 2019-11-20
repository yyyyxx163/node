let http = require('http');
let fs = require('fs')

let server =  http.createServer();


var Dir = './resource';
server.on('request', (req, res) => {
    let url = req.url;
    let filePath = '/page.html';
    if(url !== '/'){
        filePath = url
    }
    // if(url === filePath){
        fs.readFile(Dir + filePath, (err, data) => {
            if(err){
                // res.setHeader('Content-type', 'text/plain; charset = utf-8')
                return res.end('404')
            } else{
                res.end(data)
            }
        })
    // }

    // if(url === '/'){
    //     fs.readFile(Dir + '/page.html', (err, data) => {
    //         if(err){
    //             res.setHeader('Content-type', 'text/plain; charset = utf-8')
    //             res.end('文件读取失败，请稍后重试')
    //         } else{
    //             res.setHeader('Content-type', 'text/html; charset = utf-8')
    //             res.end(data)
    //         }
    //     })
    // }else if(url === '/kobe'){
    //     fs.readFile(Dir + '/kobe.jpg', (err, data) => {
    //         if(err){
    //             res.setHeader('Content-type', 'image/jpg; charset = utf-8')
    //             res.end('文件读取失败')
    //         } else{
    //             // res.setHeader('Content-type', 'image/jpg; charset = utf-8')
    //             res.end(data)
    //         }
    //     })
    // }
})

server.listen(3000, () => {
    console.log('服务器启动成功了，可以通过http://127.0.0.1:3000/进行访问 ')
})