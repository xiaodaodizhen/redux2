// ----------------实现 switch 匹配，有匹配成功的就返回，（如果此处不进行匹配会每个children都会执行，然后Router.js 中的render方法就会执行多次，然后在在render方法中进行匹配，反之，在Router.js中render会执行一次）

import React, { Component } from "react";
import PropTypes from "prop-types";
import PathToRegexp from "path-to-regexp";
export default class Switch extends Component {
    static contextTypes = {
        location: PropTypes.object
    };
    render() {

        let { pathname } = this.context.location;
        let children = this.props.children;
        for (let i = 0; i < children.length; i++) {
            let child = children[i];
            let { path } = child.props;
            if (PathToRegexp(path, [], { end: false }).test(pathname)) {
                return child;
            }
        }
        return (<div>渲染失败</div>);
    }
}

// 备注：需补充正则  match test 方法的使用