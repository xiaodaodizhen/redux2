//-----------------------------------------------------------------------------------实现路由规则源码
import React, { Component } from "react";
import PropTypes from "prop-types";// 对组件的props 中的变量进行类型检测
import pathToRegexp from "path-to-regexp";
export default class Route extends Component {
    static contextTypes = {
        location: PropTypes.object,
        history: PropTypes.object
    }
    render() {
        //  component: Component  给component 定义别名
        let { path, component: Component, render } = this.props;// this.props 是<Route path="/home" component={Home} />使用Route标签时传入的参数props
        let { location, history } = this.context;// this.context 是<Route path="/home" component={Home} />使用Route标签时传入的参数context


        // 教程中把以下三句代码定义到了constructor中了，但是不使用为Swicth 可以，使用后就报错，所以放到了这里
        this.keys = [];
        this.regexp = pathToRegexp(path, this.keys, { end: false });// 将路径转换为正则
        this.keys = this.keys.map(v => v.name);
        //  教程中把以上三句代码定义到了constructor中了，但是不使用为Swicth 可以，使用后就报错，所以放到了这里

        let result = location.pathname.match(this.regexp);// 路径匹配正则
        if ((location && path == location.pathname) || (location && location.pathname.startsWith(path)) || result) {
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

            if (render) {
                return render(propsAll);
            } else if (Component) {
                return (<Component {...propsAll} />);// 渲染传入的组件
            } else {
                return null;
            }
        } else {
            return null;
        }
    }
}