//  通过 path-to-regexp 库，实现获取 路由传参中的params对象

let pathToRegexp = require('path-to-regexp');
let str = "/user/detail/:id/:name";
let keys = [];
let reg = pathToRegexp(str, keys, { end: false });
keys = keys.map(key => key.name);
let uri = "/user/detail/1/zfe";
let [url, ...vals] = uri.match(reg);
let params = keys.reduce((memo, key, idx) => {
    memo[key] = vals[idx];
    return memo;
}, {});

console.log(params);
console.log(uri == url);