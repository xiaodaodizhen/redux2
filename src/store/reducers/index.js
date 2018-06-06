// 合并管理
import counter from "./counter";
import { combineReducers } from "redux";
// {counter:{number:0}}
export default new combineReducers({
  counterdata: counter
});