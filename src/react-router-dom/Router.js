//-----------------------------------------------------------------------------------实现路由规则源码
import React, { Component } from "react";
import PropTypes from "prop-types";// 对组件的props 中的变量进行类型检测
import pathToRegexp from "path-to-regexp";
export default class Route extends Component {
    constructor(props) {
        super(props);
        let { path } = props;
        this.keys = [];
        this.regexp = pathToRegexp(path, this.keys, { end: false });// 将路径转换为正则
        this.keys = this.keys.map(v => v.name); // ????????????????????????????????????????????????????为什么放到《位置一》点击多次就报错
    }
    static contextTypes = {
        location: PropTypes.object,
        history: PropTypes.object
    }
    render() {
        //  component: Component  给component 定义别名
        let { path, component: Component } = this.props;// this.props 是<Route path="/home" component={Home} />使用Route标签时传入的参数props
        let { location, history } = this.context;// this.context 是<Route path="/home" component={Home} />使用Route标签时传入的参数context
        let result = location.pathname.match(this.regexp);// 路径匹配正则
        if ((location && path == location.pathname) || (location && location.pathname.startsWith(path)) || result) {
            //---------------------------------------------------------------------------位置一
            let [url, ...values] = result;
            let match = {
                url,
                path,
                params: this.keys.reduce((memo, key, idx) => {
                    memo[key] = values[idx];
                    return memo;
                }, {})
            };
            // 定义组件需要传的参数
            let propsAll = {
                location,
                history: this.context.history,
                match
            };
            return (<Component {...propsAll} />);// 渲染传入的组件
        } else {
            return null;
        }
    }
}