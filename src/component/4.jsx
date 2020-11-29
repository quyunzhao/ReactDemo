import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: [
        { id: 111, value: "第一" },
        { id: 112, value: "第二" },
        { id: 113, value: "第三" },
        { id: 114, value: "第四" },
        { id: 115, value: "第五" },
      ],
    };
  }

  // 方法一
  handleClick() {
    this.setState({
      list: [
        { id: 111, value: "第一" },
        { id: 112, value: "第二" },
        { id: 113, value: "第三" },
        { id: 114, value: "第四" },
        { id: 115, value: "第五" },
      ],
    });
  }

  // 方法二
  handleClick2 = () => {
    this.setState({
      list: [
        { id: 116, value: "第六" },
        { id: 111, value: "第一" },
        { id: 112, value: "第二" },
        { id: 113, value: "第三" },
        { id: 114, value: "第四" },
        { id: 115, value: "第五" },
      ],
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick.bind(this)}>重置</button>
        <button onClick={() => this.handleClick2()}>添加</button>

        <ul>
          {this.state.list.map((v, k) => {
            return <li key={v.id}>{v.value}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default App;
