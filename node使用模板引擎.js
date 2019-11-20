var template = require('art-template');
var fs = require('fs');

fs.readFile('./tpl.html', (err, data) => {
    if(err){
        return console.log('读取文件失败')
    }
    var ret = template.render(data.toString(), {
        datas: [
            {
                name: '小李飞刀',
                gender: 1,
                age:20
            },
            {
                name: '小红飞刀',
                gender: 0,
                age:20
            },
            {
                name: '小小李飞刀',
                gender: 1,
                age:10
            }
        ]
    })
    console.log(ret)
})



