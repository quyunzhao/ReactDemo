// 新建 tab 栏案例
import React, { Component } from "react";
// 导入 css 样式
import "../assets/css/tab.css";

export default class Tab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 1,
    };
  }

  handleClick(number) {
    this.setState({
      num: number,
    });
  }

  render() {
    return (
      <div className="tab">
        <div className="tab_con">
          <input
            type="button"
            onClick={this.handleClick.bind(this, 1)}
            value="按钮1"
            className={this.state.num === 1 ? "active" : ""}
          />
          <input
            type="button"
            value="按钮2"
            onClick={this.handleClick.bind(this, 2)}
            className={this.state.num === 2 ? "active" : ""}
          />
          <input
            type="button"
            onClick={this.handleClick.bind(this, 3)}
            value="按钮3"
            className={this.state.num === 3 ? "active" : ""}
          />
        </div>
        <div className="tab_cons">
          <div className={this.state.num === 1 ? "current" : ""}>
            按钮1对应的内容
          </div>
          <div className={this.state.num === 2 ? "current" : ""}>
            按钮2对应的内容
          </div>
          <div className={this.state.num === 3 ? "current" : ""}>
            按钮3对应的内容
          </div>
        </div>
      </div>
    );
  }
}
