//  父传子 this.props
import React, { Component } from "react";

// 子组件
class Header extends React.Component {
  // 给 props 添加默认值
  static defaultProps = {
    bgc: "skyblue",
    title: "默认标题",
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
          {/* 特殊写法 专门获取 子组件被调用的时候， 写成双标签时，标签中的字元素 */}
          {this.props.children}
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
        <Header title={this.state.title} bgc="#cff" />
        <Header title="列表标题" />
        <Header>子元素</Header>
      </div>
    );
  }
}

export default App;
