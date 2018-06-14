import React, { Component } from "react";
import PropTypes from "prop-types";// 对组件的props 中的变量进行类型检测
export default class HashRouter extends Component {
    static childContextTypes = {
        // 属性：属性对应的变量类型----------------------------------------------------？？？？？？？？？？？？？？？？？？？为什么不加属性验证，就会报错呢
        location: PropTypes.object,
        history: PropTypes.object
    };
    constructor(props) {
        super(props);
        this.state = { location: { pathname: window.location.hash.slice(1) || '/' } };
    }

    getChildContext() { // 通过上下文将 对象传递给子组件????????????????????不知道这个方法什么时候调用
        return {
            location: this.state.location,
            history: {
                push(path) {
                    window.location.hash = path;
                }
            }
        }
    }
    // 在地址栏已经有地址，--------------这里用componentWillMount（执行多次）  和 componentDidMount（执行一次）方法都能实现效果,推荐使用componentDidMount，
    componentDidMount() {
        // http://localhost:3000/#/home 如果地址栏有hash值就显示这个值，如果没有则显示http://localhost:3000/#/（例如地址栏：http://localhost:3000），就是在# 号后面加/
        window.location.hash = window.location.hash || "/";

        let render = () => {
            // console.log(window.location.hash.slice(1));----例如 : /user 
            this.setState({ location: { pathname: window.location.hash.slice(1) || '/' } });
        }
        window.addEventListener("hashchange", render);
    }

    render() {
        return (this.props.children ? React.Children.only(this.props.children) : null);// 如果Router 标签里第一层包含多个平级标签，只渲染第一个，这也是为什么Router 标签在被使用时，只是支持有一个跟元素的原因
    }
}