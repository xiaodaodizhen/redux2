import React, { Component } from "react";
import { connect } from "react-redux";
class CartTail extends Component {
  constructor() {
    super();
  }
  render() {
    return (<div>
      <span>数量：{this.props.allNum}</span>
      <span>总计：{this.props.totole}</span>
    </div>);
  }
}

export default connect((state) => {
  return {
    allNum: state.cart.reduce((prev, next) => {  //未合并组件的 store.getState().cart
      if (next.checked) {
        return prev + next.count;
      } else {
        return prev;
      }

    }, 0),
    totole: state.cart.reduce((prev, next) => {
      if (next.checked) {
        return prev + next.price;
      } else {
        return prev;
      }

    }, 0)
  }
})(CartTail);