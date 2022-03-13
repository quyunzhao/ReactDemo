// 组件的生命周期更新期02
import React, { Component } from "react";

class Child extends Component {
  // ————————————————————————————————————————————————
  // 第一阶段 挂载期
  constructor(props) {
    // 调用回父类的 constructor 方法，传递 props属性名，让 props 属性起作用
    super(props);

    // 定义初始数据
    this.state = {
      num: 1111,
    };

    // 传值
    // 传递 this 到函数中去
    this.handleClick = this.handleClick.bind(this);

    console.log("1.1 constructor 组件初始化方法");
  }

  // componentWillMount() {
  //   console.log("1.2 componentWillMount 在挂载数据之前需要执行的方法");
  // }

  componentDidMount() {
    console.log("1.4 componentDidMount 在挂载数据之后需要执行的方法");

    // 异步请求 Ajax
  }

  // ——————————————————————————————————————————————————
  // 第二阶段 更新期
  // UNSAFE_componentWillReceiveProps(nextProps) {
  //   console.log("2.1 componentWillReceiveProps 在接收 props 属性之前");
  //   console.log("fatherNum 的旧值：", this.props.fatherNum);
  //   console.log("fatherNum 的新值：", nextProps.fatherNum);
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("2.2 shouldComponentUpdate ");
    console.log("num 的旧值：", this.state.num);
    console.log("num 的新值：", nextState.num);

    // return true; // 会渲染 render()
    // return false; // 不会渲染 render
    return (
      this.state.num !== nextState.num ||
      this.props.fatherNum !== nextProps.fatherNum
    );
  }

  componentWillUpdate() {
    console.log("2.3 componentWillUpdate 更新之前执行的代码");
  }

  componentDidUpdate() {
    console.log("2.5 componentDidUpdate 更新之后执行的代码");
  }

  handleClick = () => {
    // alert("handleClick");
    this.setState({
      num: 23,
    });
  };

  render() {
    console.log("1.3/2.4 render 渲染标签到页面上，填充数据到标签中");
    return (
      <div>
        <span>{this.state.num}</span>
        <br />
        <button
          onClick={() => {
            this.handleClick();
          }}
        >
          按钮
        </button>
        <br />
        <span>{this.props.fatherNum}</span>
      </div>
    );
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 262,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState = {
        data: 2655,
      };
    }, 2000);
  }

  render() {
    return (
      <div>
        <Child fatherNum={this.state.data}></Child>
      </div>
    );
  }
}
