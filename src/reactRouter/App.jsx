import React, { Component } from "react";
import ReactDOM from "react-dom";
// 引入路由模块
import { Router, Route, hashHistory } from "react-router";

// 引入对应的组件
import Home from "./Home";
import List from "./List";
import Detail from "./Detail";

export default class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <a href="#/app/home">首页</a>
          </li>
          <li>
            <a href="#/app/list">列表</a>
          </li>
          <li>
            <a href="#/app/detail/1345">详情</a>
          </li>
        </ul>
        <hr />
        {this.props.children}
      </div>
    );
  }
}

// 定义路由
let routes = (
  <Router history={hashHistory}>
    <Route path="/app" component={App}>
      {/* 相对路径的写法 */}
      <Route path="home" component={Home} />
      {/* 绝对路径的写法 */}
      <Route path="/app/list" component={List} />
      <Route path="/app/detail/:id" component={Detail} />
    </Route>
  </Router>
);

ReactDOM.render(routes, document.getElementById("root"));
