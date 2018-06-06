import React, { Component } from "react";
import ReactDom from "react-dom";
import Gaojiezujian from "./gaojiezujian";
class UserName extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <input type="text" onChange={() => { }} value={this.props.value} />
    );
  }
}
export default Gaojiezujian('username')(UserName);