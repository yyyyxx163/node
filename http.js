
// 使用http可以创建一个web服务器
// 使用http模块

// 1。 记载http模块
let http = require('http');

// 2. 说过http。createServer方法创建一个web服务器
var server = http.createServer()

// 3. 服务器的作用（接受请求，处理请求。反馈）
// 注册request请求事件，当客户的请求过来，就会自动触发服务器的request请求事件，然后执行第二个参数，回调处理函数
// 接收两个参数。request（请求对象：获取客户端的一些请求信息，例如请求路径等）。response（响应对象：用来给客户端发送响应消息）
server.on('request', (request, response) => { 
    console.log('收到客户发送的请求, 请求地址：' + request.url ) 
    if(request.url == '/'){
        // response.write('hello');
        // response.end();
        response.setHeader('Content-Type', 'text/plain; charset=utf-8')
        response.end('主页')
    } else if(request.url == '/login'){
        // response.write('login');
        // response.end();
        response.setHeader('Content-Type', 'text/html; charset=utf-8')
        response.end('<p>登录</p>')
    } else if(request.url == '/products'){
        var products = [
            {
                name: 'iphone xs',
                price: 6000
            },
            {
                name: 'huawei p30',
                price: 4000
            }
        ]
        response.end(JSON.stringify(products))

    }else{
        response.end('404 Not Fount')
    }
    // response对象哟个write方法可以用来给客户端发送响应数据、
    // write可以使用多次，但是最后一定要使用end来结束响应，否则客户端会一直等待
    

    // 思考：现在的代码，不管请求什么，服务器都返回hello
    // 不同的请求路径返回不同的结果
    // 
})

// 4.绑定端口号，启动服务器
server.listen(3000, () => {
    console.log('服务器启动成功了，可以功过http://127.0.0.1:300/进行访问 ')
})