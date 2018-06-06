import * as types from "../action-types";
let counter = {
  add(count) {
    return { type: 'ADD', count: count };
  },
  del(count) {
    return { type: 'DELETE', count: count }
  }
};
export default counter;