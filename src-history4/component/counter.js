import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../store/actions/counter";

class Counter extends Component {
  render() {
    return (<div>
      <p>计数器：{this.props.n}</p>
      <button onClick={() => {
        this.props.add(2);
      }}>+</button>
      <button onClick={() => {
        this.props.delete(1);
      }}>-</button>
      <button onClick={() => {
        this.props.addAsync(2);
      }}>+</button>
      <button onClick={() => {
        this.props.addPromise(3);
      }}>+</button>
      <button onClick={() => {
        this.props.addPromiseTwo(3);
      }}>+</button>

    </div>)
  }
}
export default connect((state) => {
  return { n: state.counters.number }
}, actions)(Counter);