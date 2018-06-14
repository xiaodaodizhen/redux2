import React, { Component } from "react";
import { Link } from "../react-router-dom";
import UserDetail from "./UserDetail";
export default class UserAdd extends Component {
    constructor() {
        super();
        this.state = { users: [] };
    }
    componentDidMount() {
        let userStr = localStorage.getItem("users");
        let users = userStr ? JSON.parse(userStr) : [];
        this.setState({ users });
    }
    render() {
        return (
            <ul className="list-group">
                {this.state.users.map((v, index) => (
                    <li key={index} className="list-group-item">
                        <Link to={`/user/detail/${v.id}`} >{v.userName}</Link>
                    </li>
                ))}
            </ul>
        );
    }
}