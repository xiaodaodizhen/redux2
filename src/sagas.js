import "babel-polyfill";// 用于实现浏览器不支持原生功能的代码
import {takeEvery} from "redux-saga/effects";// 监听每一个要到来的动作
import * as types from "./store/action-types";
export function* helloSaga() {
    console.log('hello');
}

export function* watchIncrement(){
    takeEvery(types.ADDASYNC);
}