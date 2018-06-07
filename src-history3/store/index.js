// 创建容器

import { createStore } from "redux";
import reducers from "./reducers/index"
let store = new createStore(reducers);
export default store;