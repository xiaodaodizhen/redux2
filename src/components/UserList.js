import React, { Component } from "react";
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
                    <li key={index} className="list-group-item">{v.userName}</li>
                ))}
            </ul>
        );
    }
}