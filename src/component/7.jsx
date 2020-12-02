// 使用 context 多级传递
import React, { Component } from "react";
import PropTypes from "prop-types";

class ChildChild extends Component {
  // 3.获取 context 里面的属性及类型
  static contextTypes = {
    title: PropTypes.string,
  };

  render() {
    return (
      <div>
        {/* 获取这个属性的方式  this.context.属性名  */}
        {this.context.title}
      </div>
    );
  }
}

class Child extends Component {
  render() {
    return (
      <div>
        <ChildChild></ChildChild>
      </div>
    );
  }
}

export default class App extends Component {
  // 2.在父组件中书写属性的类型
  static childContextTypes = {
    title: PropTypes.string,
  };

  // 1.要把传递给子孙组件的属性，写到 getChildContext 方法返回的对象中
  getChildContext() {
    return {
      title: "标题",
    };
  }

  render() {
    return (
      <div>
        <Child></Child>
      </div>
    );
  }
}
