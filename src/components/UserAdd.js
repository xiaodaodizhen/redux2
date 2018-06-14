import React, { Component } from "react";
export default class UserAdd extends Component {
    submitHandle = (event) => {
        event.preventDefault();// 阻止默认事件
        let userName = this.userName.value;
        let user = { id: new Date(), userName };
        let userStr = localStorage.getItem("users");
        let users = userStr ? JSON.parse(userStr) : [];
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
        this.props.history.push("/user/list");
    }
    render() {
        return (
            <form onSubmit={this.submitHandle}>
                <div className="form-group">
                    <label>用户名</label>
                    <input className="form-control" ref={input => this.userName = input} />
                </div>
                <div className="from-group">
                    <input type="submit" className="btn btn-primary" />
                </div>
            </form>
        );
    }
}