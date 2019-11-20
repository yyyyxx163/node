let http = require('http');
let fs = require('fs');
let template = require('art-template');

let server = http.createServer();

let wwwDir = '/Users/yyxmac/Desktop/yyx';
server.on('request', (req, res) => {
    let url = req.url;
    // if(url === '/'){
    //     fs.readFile('./apache.html', (err, data) => {
    //         if(err){
    //             return res.end('404 not found')
    //         }
    //         fs.readdir(wwwDir, (err, files) => {
    //             if(err){
    //                 return res.end('Cont not find wwwDir')
    //             }
    //             // 生成需要替换的内容
    //             let content = '';
    //             files.forEach( (item) => {
    //                 content += `
    //                     <tr>
    //                         <td>${item}</td>
    //                     </tr>
    //                 `
    //             } )
    //             // 替换
    //             data = data.toString();
    //             data = data.replace('@@@', content)
    
    //             // 发送解析过替换过后的响应内容
    //             res.end(data)
    //         })
    //     })
    // }
    if(url === '/'){
        fs.readFile('./apache.html', (err, data) => {
            if(err){
                return res.end('xxx')
            }
            fs.readdir(wwwDir, (err, files) => {
                if(err){
                    return res.end('yyy')
                }
                let content = files;
                console.log(content)
                // files.forEach( (item) => {
                //     content += `
                //         ${item}
                //     `
                // }) 
                data = data.toString();
                data = data.replace('@@@', content);
                res.end(data)
            })
        })
    }
})
server.listen(3000, () => {
    console.log('成功')
})