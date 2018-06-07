// {Provider,connect}
import React, { Component } from "react";
import { bindActionCreators } from "redux";

let Context = React.createContext();// 创建上下文,,,可以通过Context.Provider传递参数，通过Context.Consumer接收参数。
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
    return class NewProxy extends Component {
        // 可以算出一些属性，传递给ComponentOld组件
        render() {
            return <Context.Consumer>
                {(store) => {
                    // let state = mapStateToProps(store.getState());
                    // let actions = mapDispatchToProps(store.dispatch);
                    // return <ComponentOld {...state} {...actions}></ComponentOld>;
                    // 以上方法虽然能更改数据，但是不能更新视图，（视图是根据state进行更改的）
                    class High extends Component {// 此处高阶组件的作用是为了拿到this.state，然后更改视图setState()
                        constructor() {
                            super();
                            this.state = mapStateToProps(store.getState());
                        }
                        componentDidMount() {
                            this.unsub = store.subscribe(() => {
                                this.setState(mapStateToProps(store.getState()));
                            });
                        }
                        componentWillUnmount() {
                            this.unsub();
                        }
                        render() {
                            let actions;
                            if (typeof mapDispatchToProps == "function") { // 传入的mapDispatchToProps参数是方法的情况
                                actions = mapDispatchToProps(store.dispatch);
                            } else {// 传入的mapDispatchToProps参数是对象的情况---这里的对象，是从store文件夹-》actions文件夹-》counter.js的counter对象
                                actions = bindActionCreators(mapDispatchToProps, store.dispatch);// 通过bindActionCreators方法转换为一个所需对象
                            }
                            return <ComponentOld {...this.state} {...actions}></ComponentOld>
                        }
                    }
                    return <High />
                }}
            </Context.Consumer>
        }
    }
}

export { Provider, connect };
