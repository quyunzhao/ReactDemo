import React, { Component } from "react";
import ReactDOM from "react-dom";
// 引入路由模块
import {
  Router,
  Route,
  hashHistory,
  IndexRoute,
  IndexRedirect,
  Link,
} from "react-router";

// 引入对应的组件
import Home from "./Home";
import List from "./List";
import Detail from "./Detail";

export default class App extends Component {
  render() {
    return (
      <div>
        <ul>
          {/* <li>
            <a href="#/app/home">首页</a>
          </li>
          <li>
            <a href="#/app/list">列表</a>
          </li>
          <li>
            <a href="#/app/detail/1345">详情</a>
          </li> */}

          <li>
            <Link to="/app/home">首页</Link>
          </li>
          <li>
            <Link to="/app/list">列表</Link>
          </li>
          <li>
            <Link to="/app/detail/1345">详情</Link>
          </li>
        </ul>
        <hr />
        {this.props.children}
      </div>
    );
  }
}

// 定义路由
const routes = (
  <Router history={hashHistory}>
    <Route path="/app" component={App}>
      {/* IndexRoute 在保持 /app 路径不变的情况下，设置默认的展示页面 */}
      {/* <IndexRoute component={Home}></IndexRoute> */}

      {/* IndexRedirect 在访问 /app 会直接重定向到  /app/home 所对应的视图*/}
      <IndexRedirect to="home"></IndexRedirect>

      {/* 相对路径的写法 */}
      <Route path="home" component={Home} />
      {/* 绝对路径的写法 */}
      <Route path="/app/list" component={List} />
      <Route path="/app/detail/:id" component={Detail} />
    </Route>
  </Router>
);

ReactDOM.render(routes, document.getElementById("root"));
