let template = require('art-template');
let fs = require('fs');

let datas = [
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

fs.readFile('./tpl.html', (err, data) => {
    if(err){
        return console.log('失败')
    }
    let ret = template.render(data.toString(), {datas})
    console.log(ret)
})



