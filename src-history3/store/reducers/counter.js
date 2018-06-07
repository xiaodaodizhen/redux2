import * as types from "../action-types";
// ---------------------------------------------------------------普通方法处理state数据对象
// let initState = { number: 0 };
// function counter(state = initState, action) {
//   switch (action.type) {
//     case types.ADD:
//       return { number: state.number + action.count };
//     case types.DELETE:
//       return { number: state.number - action.count };
//   }
//   return state;
// }
// export default counter;


// -------------------------------------------------------使用immutablejs 来处理state数据对象
import { fromJS } from "immutable";
let initState = fromJS({ number: 0 });
function counter(state = initState, action) {
  switch (action.type) {
    case types.ADD:
      return state.update('number', (value) => value + action.count);
    case types.DELETE:
      return state.update('number', (value) => value - action.count);
  }
  return state;
}
export default counter;
// 返回的是counter 数据，如 {number:0}


// 如果z作为initState,克隆一份作为返回的新对象state,会有递归性能问题，（npm install immutablejs,解决这个问题 ）
// let z = {
//   username: {
//     hobby: [
//       { play: ball }
//     ]
//   },
//   a: { a: { a: 1 } },
//   b:3
// }