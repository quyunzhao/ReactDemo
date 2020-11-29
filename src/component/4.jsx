import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: [11, 25, 45, 47, 89],
    };
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.list.map((v, k) => {
            return <li key={k}>{v}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default App;
