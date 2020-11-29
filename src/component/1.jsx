import React, { Component } from "react";

export default class One extends Component {
  constructor(props) {
    super();
    this.state = {
      num: 20,
    };
  }
  handlerChange(ee) {
    const value = ee.target.value;
    // console.log(value);
    this.setState({ num: value }, function () {
      console.log(this.state.num);
    });
  }

  render() {
    return (
      <div>
        <h1> 这里是h1标题</h1>
        <p>{this.state.num}</p>
        <input
          type="text"
          value={this.state.num}
          onChange={this.handlerChange.bind(this)}
        />
      </div>
    );
  }
}
