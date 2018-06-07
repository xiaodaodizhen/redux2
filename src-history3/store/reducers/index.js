// 合并管理
import counter from "./counter";
// import { combineReducers } from "redux";//-------------------未使用immbutable 处理数据 {counter:{number:0}}
import { combineReducers } from "redux-immutable";// --------------使用immbutable处理数据  
export default new combineReducers({
  counterdata: counter
});