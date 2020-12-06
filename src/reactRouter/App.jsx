import React, { Component } from "react";
import ReactDOM from "react-dom";
// 引入路由模块
import { Router, Route, hashHistory } from "react-router";

// 引入对应的组件
import Home from "./Home";
import List from "./List";

export default class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <a href="#/home">首页</a>
          </li>
          <li>
            <a href="#/list">列表</a>
          </li>
        </ul>
      </div>
    );
  }
}

// 定义路由
let routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App} />
    <Route path="/home" component={Home} />
    <Route path="/list" component={List} />
  </Router>
);

ReactDOM.render(routes, document.getElementById("root"));
