// 创建容器
import { createStore } from "redux";
import reducers from "./reducers";
let store = new createStore(reducers);
window.store = store;
export default store;
