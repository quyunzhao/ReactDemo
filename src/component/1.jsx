import React, { Component } from "react";

export default class One extends Component {
  constructor(props) {
    super();
    this.state = {
      num: 20,
      num2: 220,
    };
  }
  handlerChange(ee) {
    const value = ee.target.value;
    // console.log(value);
    this.setState({ num: value }, function () {
      console.log(this.state.num);
    });
  }

  handlerChange2 = (e) => {
    const value = e.target.value;
    // console.log(value);
    this.setState({ num2: value }, function () {
      console.log(this.state.num2);
    });
  };

  render() {
    return (
      <div>
        <h1> 这里是h1标题</h1>
        <hr />

        <p>{this.state.num}</p>
        {/* bind 传值的写法 */}
        {/* 事件对象是隐式传值 */}
        <input
          type="text"
          value={this.state.num}
          onChange={this.handlerChange.bind(this)}
        />
        <hr />

        <p>{this.state.num2}</p>
        {/* 箭头函数需要显式传递事件对象 */}
        <input
          type="text"
          value={this.state.num2}
          onChange={(e) => this.handlerChange2(e)}
        />
      </div>
    );
  }
}
