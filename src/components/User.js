import React, { Component } from "react";
import { Link, Route } from "../react-router-dom";
import UserAdd from "./UserAdd";
import UserList from "./UserList";
import UserDetail from "./UserDetail";
export default class User extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-2">
                    <ul className="nav nav-pills nav-stacked">
                        <li><Link to="/user/add">添加用户</Link></li>
                        <li><Link to="/user/list">用户列表</Link></li>
                    </ul>
                </div>
                <div className="col-md-10">
                    <Route path="/user/add" component={UserAdd}></Route>
                    <Route path="/user/list" component={UserList}></Route>
                    <Route path="/user/detail/:id" component={UserDetail}></Route>
                </div>
            </div>
        );
    }
}