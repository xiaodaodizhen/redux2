import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../store/actions";

class Counter extends Component {
  render() {
    return (<div>
      <p>计数器：{this.props.number}</p>
      <button>+</button>
      <button>-</button>
    </div>)
  }
}
export default connect((state) => {

}, actions)(Counter);