//  通过 path-to-regexp 库，实现获取 路由传参中的params对象

let pathToRegexp = require('path-to-regexp');
let str = "/user/detail/:id/:name";
let keys = [];
let reg = pathToRegexp(str, keys, { end: false });//end 为false 是匹配开头，模糊匹配，end为true 是严格匹配

keys = keys.map(key => key.name);
console.log(keys);
let uri = "/user/detail/1/zfe";
let [url, ...vals] = uri.match(reg);
let params = keys.reduce((memo, key, idx) => {
    memo[key] = vals[idx];
    return memo;
}, {});

console.log(params);
console.log(uri == url);