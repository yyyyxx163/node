let http = require('http')
let fs = require('fs')
let url = require('url')
let template = require('art-template')

var commens = [
    {
        name: 'yyx',
        message: '今天是个好日子',
        dateTime: '2019-11-19'
    },
    {
        name: 'yyx',
        message: '今天是个好日子',
        dateTime: '2019-11-19'
    },
    {
        name: 'yyx',
        message: '今天是个好日子',
        dateTime: '2019-11-19'
    },
]

http.createServer((req, res) => {
    // let url = req.url;
    let parseObj = url.parse(req.url, true);
    let parseName = parseObj.pathname;
    if(parseName === '/'){
        fs.readFile('./views/index.html', (err, data) => {
            if(err){
                return res.end('404')
            }
            let htmlStr = template.render(data.toString(), {
                commens
            })
            res.end(htmlStr)
        })
    } else if(parseName.indexOf('/public/') === 0){
        fs.readFile('.' + parseName, (err, data) => {
            if(err){
                return res.end('404')
            }
            return res.end(data)
        })
    } else if(parseName === '/post'){
        fs.readFile('./views/post.html', (err, data) => {
            if(err){
                return res.end('404')
            }
            return res.end(data)
        })
    } else if(parseName === '/pinglun'){
        let comment = parseObj.query;
        comment.dateTime = '2019-11-11';
        commens.push(comment);
        res.statusCode = 302;
        res.setHeader('location', '/');
        res.end()
    }
}).listen(3000, () => {
    console.log('running...')
})