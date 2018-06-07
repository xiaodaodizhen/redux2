import React, { Component } from "react";
import { render } from "react-dom";
import { connect } from "../react-redux";
import counter from "../store/actions/counter";
class Counter extends Component {
  render() {
    return (<div>
      <p>计数器：<span>{this.props.n}</span></p>
      <button onClick={() => {
        this.props.add(3);
      }}>+</button>
      <button onClick={() => {
        this.props.del(2);
      }}>-</button>
    </div>);
  }
}

let mapDispatchToProps = (dispatch) => {// 以前的store.dispatch
  return {
    add(n) { dispatch(counter.add(n)) },
    del(n) { dispatch(counter.del(n)) }
  }
}
//----------------------------------------------------------------------------------普通方式 来处理state数据对象后，获取数据state.counterdata.number
// export default connect((state) => {// state 经过管理着合并后的对象，
//   return { n: state.counterdata.number }      //以前的store.getState().counter.number-----------------因为 在外部index.js 中使用<Provider>包裹了组件，传递了store 参数
// }, mapDispatchToProps)(Counter);

// ---------------------------------------------------------------------------------使用使用immutablejs 来处理state数据对象后，获取数据
export default connect((state) => {// state 经过管理着合并后的对象，
  return { n: state.getIn(["counterdata", 'number']) }      //以前的store.getState().counter.number-----------------因为 在外部index.js 中使用<Provider>包裹了组件，传递了store 参数
}, mapDispatchToProps)(Counter);