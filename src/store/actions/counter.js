import * as types from "../action-types";
let actions = {
  add(count) {
    return { type: types.ADD, count };
  },
  addasync() {
    return { type: types.ADDASYNC };
  },

};
export default actions;