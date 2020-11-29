//  父传子 this.props
import React, { Component } from "react";

// 子组件
class Header extends React.Component {
  static defaultProps = {
    bgc: "skyblue",
  };
  render() {
    return (
      <div>
        <header
          style={{
            width: "100%",
            height: 32,
            lineHeight: "32px",
            backgroundColor: this.props.bgc,
          }}
        >
          {/* this.props 要获取调用这个组件的标签属性 */}
          {this.props.title}
        </header>
      </div>
    );
  }
}

// 父组件
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "首页标题",
    };
  }

  render() {
    return (
      <div>
        <Header title={this.state.title} bgc="#cff"></Header>
        <Header title="列表标题"></Header>
      </div>
    );
  }
}

export default App;
