// 包含所有组件
import React, { Component } from "react";
import CartTail from "./cartTail";
import CartList from "./cartList"
export default class Cart extends Component {
  constructor() {
    super();
  }
  render() {
    return (<div className="container">
      <h3 className="text-center">购物车</h3>
      <CartList />
      <CartTail />
    </div>);
  }
}