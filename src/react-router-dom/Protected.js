import React from "react";
import Route from "./Router";
import Redirect from "./Redirect";
// 用来保护那些只有登陆后才能访问的路由
// 如果用户已经登陆，则可以渲染组件，如果没有登陆，则需要跳转到登录页，登陆完成后在跳转回来

export default function Protected({ component: Component, ...rest }) {
    return <Route {...rest} render={props => (
        localStorage.getItem("login") ? <Component {...props} /> : <Redirect to={{ pathname: "/login", state: { from: props.location.pathname } }} />
    )} />
}



/**
 * 在    <Route path="/user" component={User} /> 路由规则中加载组件的方式有三种
 * 1. 通过属性 component={组件名，固定，不可扩展}
 * 2. 通过属性 render={props=>(可进行扩展)}
 * 3. 未完待续
 * 
 */

 /**
  * <Redirect to={{ pathname: "/login", state: { from: props.location.pathname } }} 
  * 组件中的to 属性，可以是一个对象，也可以是一个字符串
  * pathname 是跳转到那个地址（例如：/profile），state记录状态，from 是记录点击那个路径，要跳转到pathnanme,等登陆完成后在自动跳回from的路径地址
  * 
  */