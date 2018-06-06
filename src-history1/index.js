import React, { Component } from 'react';
import { render } from 'react-dom';
import "bootstrap/dist/css/bootstrap.css";
//----------------------------------实现购物车功能（父传子--使用了组件传参的方法：同级数据传递， 通过共同的父级，如果没有父级，就创造个父级）
// import Cart from "./component/cart";
// import { Provider } from "react-redux";
// import store from "./store";
// render(<Provider store={store}><Cart /></Provider>, window.root);


//---------------------实现跨组件传递（爷传孙，爷传子）
// react 提供了一个context Api 可以解决跨组件传递参数的功能，16.3版本以前的context和16.3+的context 有区别（基本完全不一样），
// 16.3以前官方不推荐使用这个api，16.3以前版本存在这样一个问题（如果某个组件shouldComponentUpdat方法返回了false，后面的组件就不会更新了）

// 创建上下文-返回的对象有两个属性： Provider（与跟组件使用的<Provider/>没关系不是一个东西）\Consumer      备注:CreateContext({color:'red'})中的对象是默认参数(如果跟组件的 <Provider value={this.state}>没有使用Provider传参)
let { Consumer, Provider } = React.createContext({ color: 'blue' });
class Title extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Consumer>
          {/* Consumer中必须放函数，函数中的参数data就是 CreateContext()中的参数*/}
          {({ s, h }) => {
            return <div style={s} onClick={() => {
              h("#ccc");
            }}>多大的</div>
          }}
        </Consumer>
      </div>
    );
  }
}

class Head extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Title />
      </div>
    );
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = { color: 'red' };
  }

  // 子组件使用本方法改变颜色
  handleColor = (newColor) => {
    this.setState({ color: newColor });
  }

  render() {
    return (
      <div>
        {/* <Provider>只能使用在父级上    value={this.state}  或value={{ s: this.state, h: this.handleColor }} ，给React.createContext()传递参数（参数数据类型不限制）*/}
        {/* h: this.handleColor：组件传参的 父子通信 父亲写好一个方法，传递给子组件，子组件调用这个方法，相当于调用了父类的方法，这个方法中可以去更改父类状态 */}
        <Provider value={{ s: this.state, h: this.handleColor }}>
          <Head />
        </Provider>
      </div>
    )
  }
}
render(<App></App>, window.root);