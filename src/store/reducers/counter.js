import * as types from "../action-types";
let initState = { number: 0 };
function counter(state = initState, action) {
  switch (action.type) {
    case types.ADD:
      return { number: state.number + action.count };
    case types.DELETE:
      return { number: state.number - action.count };
  }
  return state;
}
export default counter;
// 返回的是counter 数据，如 {number:0}