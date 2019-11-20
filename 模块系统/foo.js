var foo = 'yyx';
function add(x, y){
    return x + y
}


// 如果一个模块需要直接导出一个方法，而不是挂载的方式，只能使用module.exports的方法
module.exports = {
    foo,
    add
}