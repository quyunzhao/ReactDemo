// 子组件向父组件传值
// 父组件传递一个方法给子组件调用
import React, { Component } from "react";

class Child extends Component {
  handleClick() {
    // 点击的时候调用父组件传递过来的方法
    this.props.fatherChange(222);
    // this.props.hello();
  }
  render() {
    return (
      <div>
        {this.props.children}
        <hr />
        {/* <button onClick={this.handleClick.bind(this)}>按钮(.bind(this))</button> */}
        <button
          onClick={() => {
            this.handleClick();
          }}
        >
          按钮
        </button>
      </div>
    );
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 1111,
    };
  }

  hello = () => {
    alert("hello");
  };

  // 在父组件中传递一个方法给子组件调用
  fatherChange = (value) => {
    this.setState(
      {
        num: value,
      },
      function () {
        console.log("父方法fatherChange()调用了");
      }
    );
  };

  render() {
    return (
      <div>
        {/* <Child
          hello={() => {
            this.hello();
          }}
        >
          子元素
        </Child> */}
        {/* 传递了 fatherChange 方法给子组件调用 */}
        {/* 子组件通过 this.props.fatherChange() 调用  */}
        <Child
          fatherChange={(val) => {
            this.fatherChange(val);
          }}
        >
          {this.state.num}
        </Child>
      </div>
    );
  }
}
