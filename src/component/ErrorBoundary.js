import React, { Component } from "react";
export default class ErrorBoundary extends Component {
    constructor() {
        super();
        this.state={hasErr:false};
    }
    componentDidCatch(hasErr){
        this.setState(hasErr);
    }
    render(){
        if(this.state.hasErr){
            return <div>此组件暂时无法显示</div>
        }
        return this.props.children;
    }
}