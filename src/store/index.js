import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers/index";
import createSagaMiddleware from "redux-saga";
import { helloSaga } from "../sagas";
// let store = createStore(reducers);
// 这是一个可以帮你运行saga的中间件
let sageMiddleware = createSagaMiddleware();
let store = createStore(reducers, applyMiddleware(sageMiddleware));
// 通过中间件执行，或者说运行saga
sageMiddleware.run(helloSaga);
window.store = store;
export default store;