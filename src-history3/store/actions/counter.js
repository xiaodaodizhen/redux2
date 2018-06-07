import * as types from "../action-types";
let counter = {
  add(count) {
    return { type: types.ADD, count: count };
  },
  del(count) {
    return { type: types.DELETE, count: count }
  }
};
export default counter;