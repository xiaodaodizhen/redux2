// 高阶组件--组件返回组件----解决代码的复用，将公共代码抽离出来（将公共逻辑放到父组件中处理，然后返回子组件）。


//两个输入框都需要去本地的 localStorage取值

import React, { Component } from "react";
import { render } from 'react-dom';
import UserName from "./username";
import PassWord from "./password";
render(<div>
  <UserName />
  <PassWord />
</div>, window.root);