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

// getState获取仓库中的状态对象，dispatch 派发action方法
function logger({ getState, dispatch }) {// 获取状态和派发动作
    return function (next) { // 如果想继续，则可以调用next(此处的next 其实就是store.dispatch)，（所有中间件的next都是洋葱模型，或回针模型，比如koa）
        return function (action) {
            console.log("befor state", getState());
            console.log(action);
            next(action);
            console.log('after state', getState());
        }
    }
}


//thunk 是用来处理函数action的，判断一下如果这个action是一个函数的话，就会让他执行
function thunk({ getState, dispatch }) {
    return function (next) {
        return function (action) {
            if (typeof action == "function") {
                action(getState, dispatch);
            } else {
                next(action)
            };
        }
    }
}

//redux-promise 中间件
let promise = ({ getState, dispatch }) => next => action => {
    if (action.then && typeof action.then == "funcion") {
        action.then(dispatch);
    } else {
        next(action);
    }
}

// 实现applyMiddleware源码
function applyMiddleware(middleware) {// middleware 中间件的名字
    return (createStore) => {
        return (reducers) => {
            let store = createStore(reducers);// 创建出原生仓库
            let middlewareAPI = {
                getState: store.getState,
                dispatch: store.dispatch
            };
            middleware = middleware(middlewareAPI);
            let dispatch = middleware(store.dispatch);// store.dispatch 执行的是中间件的next回调参数
            return { ...store, dispatch };
        }
    }

}


// 使用中间件的写作方式
// let store = applyMiddleware(logger)(createStore)(reducers);
let store = applyMiddleware(promise)(createStore)(reducers);

export default store;