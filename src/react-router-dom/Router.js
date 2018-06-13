import React, { Component } from "react";
import PropTypes from "prop-types";// 对组件的props 中的变量进行类型检测
export default class Route extends Component {
    static contextTypes = {
        location: PropTypes.object,
        history: PropTypes.object
    }
    render() {
        //  component: Component  给component 定义别名
        let { path, component: Component } = this.props;// this.props 是<Route path="/home" component={Home} />使用Route标签时传入的参数props
        let { location, history } = this.context;// this.context 是<Route path="/home" component={Home} />使用Route标签时传入的参数context
        if ((location && path == location.pathname) || (location && location.pathname.startsWith(path))) {
            return (<Component location={location} history={history} />);// 渲染传入的组件
        } else {
            return null;
        }
    }
}