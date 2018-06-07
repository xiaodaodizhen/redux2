let { Map, fromJS, List, is } = require('immutable');
// 1.只操作对象（支持对数组的增删改查）
// let obj = { a: 1 };
// // 返回的m1 是个不可变对象，不管怎么更变，都不会影响m1的值
// let m1 = Map(obj);
// // let m2 = m1.set('a', 100);// 设置值，返回的是一个新的不可变对象
// let m2 = m1.update("a", (a) => a + 100); // 更新方法
// console.log(m1.get("a"));
// console.log(m2.get("a"));


// 2.多层嵌套对象（支持对数组的增删改查）
// 1) Map 只处理一层数据
let obj = { a: { a: 1 }, b: 2 };
let m1 = Map(obj);
console.log(m1); // Map { "a": [object Object], "b": 2 }

// 2) fromJs 支持处理一级或多级数据,公有部分会共享数据
let m2 = fromJS(obj);
let m3 = m2.set("b", 4);
console.log(m2); // Map { "a": Map { "a": 1 }, "b": 2 }

console.log(m2.a === m3.a); // true  ,公有部分会共享数据


//-----------------

let obj2 = { a: { b: { c: { d: 1 } } }, m: 100 };
let om1 = fromJS(obj2);
let om2 = om1.setIn(["a", "b", "c", "d"], 9); // setIn  更改里面层级的属性值
console.log(om2.getIn(["a", "b", "c", "d"]));

// 3.将Map对象转换为js（一般情况下不要调用toJS()）
console.log(om1.toJS()); // { a: { b: { c: [Object] } }, m: 100 }  前面不在带有Map 关键字

// 4. 比较是否相等
let om3 = fromJS({ a: 1, b: { c: 123 } });
let om4 = fromJS({ a: 1, b: { c: 123 } });
console.log(is(om3, om4));