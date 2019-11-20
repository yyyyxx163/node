var fs = require('fs');
fs.readFile('./data/world.txt', function(error, data){
    //  console.log(data.toString())
    if(error){
        console.log('error')
    } else {
        console.log(data)
    }
})
// fs.writeFile('./data/world.txt', 'hello  world 我是nodejs', (error) => {
//     console.log('写入成功')
// })