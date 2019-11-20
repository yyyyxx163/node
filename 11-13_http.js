let http = require('http');
let fs = require('fs');
// http://tool.oschina.net/commons
// 不同的资源对应的Content-type是不一样的


// 创建一个服务
let server = http.createServer();

server.on('request', (req, res) => {
    // 中文乱码。在服务器端默认发送的数据，是utf-8编码的内容
    // 但是浏览器不知道你是utf-8编码的内容
    // 浏览器不知道浏览器编码内容的情况下，会按照当前操作系统的默认编码去解析
    // 中文操作系统，默认是 gbk
    // 解决方法：就是告诉浏览器我给你发送的内容是什么编码的
    // 在http协议中：Content-type就是用来告诉对方我给你的数据内容是什么类型的
    // res.setHeader('Content-type', 'text/plain; charset=utf-8');
    // res.end('hello 世界')

    let url = req.url;
    // if(url === '/plain'){
    //     res.setHeader('Content-type', 'text/plain; charset=utf-8');
    //     res.end('hello 世界')
    // } else if(url === '/html'){
    //     res.setHeader('Content-type', 'text/html; charset=utf-8');
    //     res.end('<p>hello world<a href="http://nodejs.cn/api/">点我</a></p>')
    // }


    if(url === '/'){
        fs.readFile('./resource/page.html', (err, data) => {
            if(err){
                res.end(404)
            } else {
                // data默认是二进制数据，可以通过.toString()转为咱们可以识别的字符串
                // res.end()支持两种数据类型，一种是二进制，一种是字符串
                res.end(data)
            }
        })
    } else if(url === '/kobe'){
        // url：统一资源定位符。
        // 一个url最终其实是要对应一个资源的
        fs.readFile('./resource/kobe.jpg', (err, data) => {
            if(err){
                res.end(404)
            } else {
                // 图片就不需要指定编码了。常谈的编码是：字符编码
                res.setHeader('Content-type', 'image/jpg')
                res.end(data)
            }
        })
    }
})

server.listen(3000, () => {
    console.log('服务器启动了，通过127.0.0.1:3000进行访问')
})
