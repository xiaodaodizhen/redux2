// 动作管理
import * as types from "../action-types";
let initState = { number: 0 };
function counters(state = initState, action) {
  switch (action.type) {
    case types.ADD:
      return { number: state.number + action.count };
 
  }
  return state;
}

export default counters;