import React, { Component } from 'react';
import ReactDOM from "react-dom";
import App from "./components/app";
import 'bootstrap/dist/css/bootstrap.css';
/**
 * 常用的路由模块
 * HashRouter 通过路径里的哈希变量实现---开发用
 * BrowserRouter 用的html5的history API实现的---上线用
 */
// import { HashRouter as Router, Route } from 'react-router-dom';

import { HashRouter as Router, Route } from "./react-router-dom/index";
// Router ：路由容器   Route ：路由规则

let Home = (props, context) => {
    // *******************使用Route标签，会传入props 和context参数
    // <Home/> 如果当作普通组件使用，这两个参数为空对象
    /* <Route path="/home" component={Home} />  如果在Route标签使用了本组件会打印出这两个参数属性*/
    console.log(props, context);
    return (<div>首页</div>);
};
let User = () => (<div>用户管理</div>);
let Profile = () => (<div>个人设置</div>);
// 渲染的时候会先取当前的路径（location.hash），然后跟path进行匹配，如果成功则显示componet 指定的组件，如果失败则不显示
// ReactDOM.render(
//     <Router>
//         {/*Router 组件，有且只有一个跟元素，所以里面的多个路由规则需要外部嵌套一层div */}
//         <div>
//             <Route path="/home" component={Home} />
//             <Route path="/user" component={User} />
//             <Route path="/profile" component={Profile} />
//         </div>
//     </Router>,
//     window.root
// );


ReactDOM.render(
    < App >
        <Route path="/home" component={Home} />
        <Route path="/user" component={User} />
        <Route path="/profile" component={Profile} />
    </App >,
    window.root
);