import React, { Component } from "react";

export default class Detail extends Component {
  componentDidMount() {
    // 发起异步请求
  }

  render() {
    return (
      <div>
        <h1>详情</h1>
        <p>{this.props.routeParams.id}</p>
      </div>
    );
  }
}
