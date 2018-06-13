import React, { Component } from "react";
import PropTypes from "prop-types";// 对组件的props 中的变量进行类型检测
export default class HashRouter extends Component {
    static childContextTypes = {
        // 属性：属性对应的变量类型
        location: PropTypes.object
    };
    constructor(props) {
        super(props);
        this.state = {};
    }

    getChildContext() {
        return {
            location: { pathname: window.location.hash.slice(1)||'/' }
        }
    }
    // 在地址栏已经有地址，组件要挂在的完成时候
    componentDidMount() {
        // http://localhost:3000/#/home 如果地址栏有hash值就显示这个值，如果没有则显示http://localhost:3000/#/（例如地址栏：http://localhost:3000），就是在# 号后面加/
        window.location.hash = window.location.hash || "/";
        let render=()=>{
            this.setState();
        }
        window.addEventListener("hashchange",render);
    }

    render() {
        return this.props.children ? React.Children.only(this.props.children) : null;// 如果Router 标签里第一层包含多个平级标签，只渲染第一个，这也是为什么Router 标签在被使用时，只是支持有一个跟元素的原因
    }
}