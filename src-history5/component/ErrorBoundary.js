// ------------------------错误边界，捕捉组件内部错误，并且输出默认文案,,,新版本不支持
import React, { Component } from "react";
 class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    componentDidCatch(err,info) {
        this.setState({hasError:true});
        console.log(err,info);
    }
    render() {
        if (this.state.hasError) {
            console.log(3);
            return <div>此组件暂时无法显示</div>
        }
        return this.props.children;
    }
}

class Todo extends Component {
    render() {
        //  null undefined是在意义上属于组件 <div>{undefined} </div>这样写不会报错--(<div>{null.toString()} </div>)
        return (<div>{null.toString()} </div>)
    }
}
export default class MyPage extends Component {
    render() {
        return (
            <ErrorBoundary>
                <Todo />
            </ErrorBoundary>
        )
    }
}