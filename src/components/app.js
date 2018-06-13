import React, { Component } from "react";
import { HashRouter as Router, Link } from "../react-router-dom";

export default class APP extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <nav className="navbar navbar-inverse">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <div className="navbar-brand">管理系统</div>
                            </div>
                            <ul className="nav navbar-nav">
                                <li>
                                    {/* Link其实是一个a标签 */}
                                    <Link to="/home" >首页</Link>
                                </li>
                                <li>
                                    <Link to="/user" >用户管理</Link>
                                </li>
                                <li>
                                    <Link to="/profile" >个人设置</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div className="row">
                        <div className="col-md-12">
                            {/*  第一种写法 这里的this.props.children 是index.js 中<APP>标签内的路由规则*/}
                            {this.props.children}

                            {/*  第二种写法 可以直接把index.js 中<APP>标签内的路由规则直接放到这里*/}
                            {/* <Route path="/home" component={Home} /> */}
                            {/* <Route path="/user" component={User} /> */}
                            {/* <Route path="/profile" component={Profile} /> */}
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}