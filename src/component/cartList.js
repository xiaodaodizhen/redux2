//购物车列表
import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../store/actions/cart";
class CartList extends Component {
  constructor() {
    super();
  }
  render() {
    return (<table className="table">
      <thead>
        <tr>
          <th>全选</th>
          <th>名称</th>
          <th>数量</th>
          <th>价格</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        {this.props.carts.map((item, index) =>
          (<tr key={index}>
            <td><input type="checkbox" checked={item.checked} onChange={() => {
              this.props.changeCheck(item.id);
            }} /></td>
            <td>{item.name}</td>
            <td>{item.count}</td>
            <td>{item.price}</td>
            <td><button onClick={() => {
              this.props.removeCart(item.id)
            }}>删除</button></td>
          </tr>
          ))}

      </tbody>
    </table>);
  }
}
export default connect((state) => {
  return {
    carts: state.cart     //以前的store.getState().cart
  }
}, actions)(CartList);