import * as types from "../action-types";
let initState = [
  { id: 1, checked: true, name: "apple", price: 2342, count: 1 },
  { id: 2, checked: true, name: "yali", price: 23, count: 1 },
  { id: 3, checked: true, name: "sun", price: 2341, count: 2 }
];
function cart(state = initState, action) {
  switch (action.type) {
    // 更改选择的状态是根据id来操控的{type:"CHANGE_CHECK",id:2}
    case types.CHANGE_CHECK:
      return state.map(e => {
        if (action.id === e.id) {
          e.checked = !e.checked;
        }
        return e;
      });
    // 删除
    case types.REMOVE_CART:
      return state.filter(e => e.id !== action.id);
  }
  return state;
}
// cart管理
export default cart;