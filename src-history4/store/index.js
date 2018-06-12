// 创建容器

//import { createStore, applyMiddleware } from "redux";// applyMiddleware 中间件方法
// import logger from "redux-logger";
import { createStore } from "redux";
import reducers from "./reducers/index";

// let store = new createStore(reducers);


/**
 * 首先中间件的原理是对原生的仓库中的dispatch 方法的增强或修改
 * 
 */

// logger中间件最好放到最右边，因为越靠右意味着越晚执行，越靠近store.dispatch  getState获取仓库中的状态对象，dispatch 派发action方法
function logger({ getState, dispatch }) {// 获取状态和派发动作
    return function (next) { // 如果想继续，则可以调用next(此处的next 其实就是store.dispatch 或者下一个中间件)，（所有中间件的next都是洋葱模型，或回针模型，比如koa）
        console.log('logger');
        return function (action) {
            console.log('logger-act');
            console.log("befor state", getState());
            next(action);
            console.log('after state', getState());
        }
    }
}


//thunk 是用来处理函数action的，判断一下如果这个action是一个函数的话，就会让他执行
function thunk({ getState, dispatch }) {
    return function (next) {
        console.log('thunk');
        return function (action) {
            console.log('thunk-act');
            if (typeof action === "function") {
                action(getState, dispatch);
            } else {
                next(action)
            };
        }
    }
}

//redux-promise 中间件
let promise = ({ getState, dispatch }) => next => action => {
    console.log('promise-act');
    if (action.then && typeof action.then === "function") {
        action.then(dispatch);// 因为dispatch 等于action=>dispatch(action)
    } else if (action.payload && action.payload.then && typeof action.payload.then === "function") {
        action.payload.then((payload) => {
            dispatch({ ...action, payload });
        }, (payload) => {
            dispatch({ ...action, payload });
        });
    } else {
        next(action);
    }
}

// 实现applyMiddleware源码
// function applyMiddleware(middleware) {// middleware 中间件的名字
//     return (createStore) => {
//         return (reducers) => {
//             let store = createStore(reducers);// 创建出原生仓库
//             let middlewareAPI = {
//                 getState: store.getState,
//                 dispatch: store.dispatch
//             };
//             middleware = middleware(middlewareAPI);
//             let dispatch = middleware(store.dispatch);// store.dispatch 执行的是中间件的next回调参数
//             return { ...store, dispatch }; // dispatch是一个函数
//         }
//     }

// }

let applyMiddleware = (...middlewares) => createStore => reducer => {
    let store = createStore(reducer);
    let dispatch; // 步骤一
    let middlewareAPI = {
        getState: store.getState,
        dispatch: action => dispatch(action) // 步骤二（此时的dispatch是步骤一的，只是定义还未赋值，在此站位,执行完步骤三后会有值）         ?????????????????????代表啥????????????????????????此处不要简写为dispatch ，以为我们希望让middlewareAPI.dispatch调用到增加后的dispatch
    };
    middlewares = middlewares.map(middleware => middleware(middlewareAPI));
    // 把多个中间件组合成一个函数，接受一个参数，并获取一个返回值
    dispatch = compose(...middlewares)(store.dispatch);//步骤三（此时将compose的执行结果赋值给步骤一的dispatch）    store.dispatch中间件的参数next
    return { ...store, dispatch };
}



// 使用中间件的写作方式
// let store = applyMiddleware(thunk)(createStore)(reducers);
// let store = applyMiddleware(logger)(createStore)(reducers);
// let store = applyMiddleware(promise)(createStore)(reducers);


// let com = function (...fs) {
//     let i = 0;
//     return fs.reduce((n, m) => {
//         let t = (xx) => {
//             return n(m(xx))
//         };
//         return t;
//     });
// }
// function a(str) {
//     return "a" + str;
// };
// function b(str) {
//     return "b" + str;
// };
// function c(str) {
//     return "c" + str;
// };
// com(c, b, a)('d');

// 实现多个方法为参数执行，是com 方法的简写形式
let compose = (...fns) => fns.reduce((a, b) => (...args) => { 
    return a(b(...args)) }
)

let store = applyMiddleware(thunk, promise, logger)(createStore)(reducers);


// 同时使用多个中间件

export default store;