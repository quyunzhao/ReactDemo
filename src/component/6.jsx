import React, { Component } from "react";

class ChildChild extends Component {
  render() {
    return <div>{this.props.title}</div>;
  }
}

class Child extends Component {
  render() {
    return (
      <div>
        <ChildChild title={this.props.title}></ChildChild>
      </div>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <div>
        <Child title="标题"></Child>
      </div>
    );
  }
}
