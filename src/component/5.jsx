import React, { Component } from "react";

// 导入校验包
import PropTypes from "prop-types";

class Headers extends Component {
  static propTypes = {
    // 要验证的属性名: PropTypes.期望的类型
    title: PropTypes.string,
  };
  render() {
    return <div>{this.props.title}</div>;
  }
}

export default class App extends Component {
  render() {
    return (
      <div>
        <Headers title="标题"></Headers>
        <Headers title={123}></Headers>
      </div>
    );
  }
}
