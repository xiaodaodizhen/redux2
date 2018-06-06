

// let gaojiezujian = () => {
//   return () => {

//   }
// }
// 可以简写为以下格式

// 高阶组件--组件返回组件----解决代码的复用，将公共代码抽离出来（将公共逻辑放到父组件中处理，然后返回子组件）。
// connect其实也是一个高阶组件  -----------  let 新组件=connect()(旧组件)

import React, { Component } from "react";

let gaojiezujian = (key) => (ComponentName) => {
  return class Gaojiezujian extends Component {// 使用一层父级组件，处理公共逻辑
    constructor() {
      super();
      this.state = { value: "" };
    }
    componentWillMount() {
      let keyName = localStorage.getItem(key);
      this.setState({ value: keyName });
    }

    render() {// 将作为参数传入的组件，附上参数返回为
      return <ComponentName value={this.state.value}></ComponentName>
    }
  }
}
export default gaojiezujian;