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
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ type: types.ADD, count });
      }, 1000);
    });
  }
};
export default actions;