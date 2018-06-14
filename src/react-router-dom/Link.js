//-----------------------------------------------------------------------------实现导航点击跳转路由Link源码
import React, { Component } from "react";
import PropTypes from "prop-types";
export default class Link extends Component {
  static contextTypes = {
    history: PropTypes.object
  }

render() {
  // console.log(this.props);
  return (
    <a onClick={() => {
      this.context.history.push(this.props.to)
    }}>{this.props.children}</a>
  );
}
}




