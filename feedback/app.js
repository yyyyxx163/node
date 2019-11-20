// 为了方便统一处理这些静态资源，所以我们约定，吧所有的h静态资源都放在pubic目录下面
// 哪些资源能被用户访问，哪些资源不能被用户访问，可以用代码非常灵活的控制。现在public是可以被访问的

var http = require('http');
var fs = require('fs');
let template = require('art-template');
let url = require('url');

var comments = [
    {
        name: 'yyx',
        message: 'aaaaaaaaaa',
        dateTime : '2019-11-18'
    },
    {
        name: 'yjb',
        message: 'bbbbbbb',
        dateTime : '2019-11-18'
    },
    {
        name: 'ycy',
        message: 'cccccccc',
        dateTime : '2019-11-18'
    },
    {
        name: 'yky', 
        message: 'dddddddd',
        dateTime : '2019-11-18'
    }, 
    // 表单提交数据
    // 对于这种表单提交的请求路径，由于其中具有用户动态填写的内容
    // 所以你不能通过判断完整的url路径来处理这个请求
    // 结论：对于我们来讲，其实只需要判定你的请求路径是/pinglun的时候，那我就认为你提交的表单的请求过来来
]

http.createServer((req, res) => {
    // 使用url.parse方法将路径解析为一个方便操作的对象，第二个参数为ture表示直接将查询字符串转为一个对象（通过query属性来访问）
    let parseObj = url.parse(req.url, true)
    // var url = req.url;
    let parseName = parseObj.pathname;
    var dir = './views'
    var filePath = '/index.html'

    // if(parseName !== '/'){
    //     filePath = url
    // }

    // if(url !== '/'){
    //     filePath = url
    // }
     
    if(parseName === '/'){
        fs.readFile(dir + filePath, (err, data) => {
            if(err){
                return res.end('404 Not Found')
            }
            let ret = template.render(data.toString(), {
                comments 
            })
            res.end(ret)
        })
    } else if(parseName === '/post') {
        fs.readFile('./views/post.html', (err, data) => {
            if(err){
                return res.end('404')
            }
            return res.end(data)
        })
    } else if(parseName === '/pinglun') {  
        // 这个时候不管/pinglun后面是什么都不用担心了。因为parseName就是？之前的路径
        // res.end(JSON.stringify(parseObj.query))

        // 我们已经使用url模块中的parse方法把请求路径中查询字符串解析成一个对象了。
        // 所以接下来就是：
        // 1.获取获取表单提交的数据parseObj.query
        // 2.生成日期到数据对象中，然后存储在数组中
        // 3.让用户重定向跳转到首页（当用户重新请求的时候，数组中的数据已经发生了变化所以用户看到的页面也更新了）
        var comment = parseObj.query;
        comment.dateTime = '2019-11-11'
        comments.push(comment)
        // 服务器这个时候已经将数据存储好了，接下来就是让用户重新请求/首页，就可以看到添加的用户了
        // 如何通过服务器让客户端重定向：
        // 1.状态码设置为302临时重定向（statucCode）
        // 2.在响应头中通过location告诉客户端往哪重定向(setHeader)
        // 如果客户端发现收到服务器的响应的状态是302，会自动去响应头中找location。所以就可以看到客户端自动跳转了
        res.statusCode = 302
        res.setHeader('Location', '/')
        res.end()

    } else if(parseName.indexOf('/public/') === 0){ 
        // /public/css/main/css
        // /public/js/main/js
        fs.readFile('.' + parseName, (err, data) => {
            if(err){
                return res.end('404 Not Found')
            }
            res.end(data)  
        })
    } else {
        fs.readFile('./views/404.html', (err,  data) => {
            if(err){
                return res.end('404')
            }
            res.end(data)
        })
    }
}).listen('3000', () => {
    console.log('running...')
})