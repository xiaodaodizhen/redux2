import React, { Component } from "react";
export default class Login extends Component {
    handleClick = () => {
        localStorage.setItem("login", true);
        this.props.history.push(this.props.location.state.from);
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick} className="btn btn-primary">登陆</button>
            </div>
        );
    }
}