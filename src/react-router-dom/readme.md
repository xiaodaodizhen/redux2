##  HashRouter   Link  Route 三者的关系


- Link Route都是HashRouter的child
- 点击Link 组件 执行hashRouter的getChildContext方法，当地址栏的内容发生变化(window.location.hash)，会重新设置状态（setState()），根据路由规则Route 来加载组件
- 参数是通过上下文context 传递
