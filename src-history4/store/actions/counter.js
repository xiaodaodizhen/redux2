import * as types from "../action-types";
let actions = {
  add(count) {
    return { type: types.ADD, count };
  },
  delete(count) {
    return { type: types.DELETE, count };
  },
  addAsync(count) {
    return function (getState, dispatch) {
      setTimeout(() => {
        dispatch({ type: types.ADD, count });
      }, 1000);
    }
  },
  addPromise(count) {
    return new Promise((resolve, reject) => { //直接返回pormise 对象只能处理一种状态的的回调（单种状态）
      setTimeout(() => {
        resolve({ type: types.ADD, count });
      }, 1000);
    });
  },
  addPromiseTwo(count) {
    return {
      type: types.PAYLOAD,
      payload: new Promise((resolve, reject) => { // 这个promise 不管成功还是失败（双重状态），都会再次派发action
        if (Math.random > .5) {
          resolve(count);
        } else {
          reject(-count);
        }
      })
    }
  }
};
export default actions;