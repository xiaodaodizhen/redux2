//购物车列表
import React, { Component } from "react";
import { connect } from "react-redux";
class CartList extends Component {
  constructor() {
    super();
  }
  render() {
    return (<table>
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
        {/* {this.props.carts.map((item, index) => {
          <tr key={index}>
            <td>{name}</td>
          </tr>
        })} */}

      </tbody>
    </table>);
  }
}
export default connect((state) => {
  return {
    carts: state.cart
  }
})(CartList);