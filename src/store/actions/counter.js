import * as types from "../action-types";
let actions = {
  add(count) {
    return { type: types.ADD, count };
  },
  delete(count) {
    return { type: types.DELETE, count };
  }
};
export default actions;