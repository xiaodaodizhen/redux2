// {Provider,connect}
import React, { Component } from "react";
let Context = React.createContext();// 创建上下文
class Provider extends Component {
    // Provider有一个属性是store

    render() {
        // 返回里面的所有子组件
        // <Context.Provider></Context.Provider>的简写是<Provider><Provider>，Provider是Context的属性
        return (<Context.Provider value={this.props.store}>
            {this.props.children}
        </Context.Provider>);
    }
}
// 最后connect 返回的组件一定是Provider的子组件
let connect = (mapStateToProps, mapDispatchToProps) => (ComponentOld) => {
    return class Proxy extends Component {
        // 可以算出一些属性，传递给ComponentOld组件
        render() {
            return <Context.Consumer>
                {(store) => {
                    let state = mapStateToProps(store.getState());
                    let actions = mapDispatchToProps(store.dispatch);
                    return <ComponentOld {...state} {...actions}></ComponentOld>;
                }}
            </Context.Consumer>
        }
    }
}

export { Provider, connect };
