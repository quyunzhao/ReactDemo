// 不受控组件
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.usernameRef = React.createRef();
    this.passwordRef = React.createRef();
  }

  handelClick = () => {
    const username = this.usernameRef.current.value;
    const password = this.passwordRef.current.value;

    console.log(username);
    console.log(password);
  };
  render() {
    return (
      <div>
        <hr />
        用户名:
        <input type="text" ref={this.usernameRef} />
        <br />
        密&emsp;码:
        <input type="password" ref={this.passwordRef} />
        <br />
        <input
          type="button"
          value="登录"
          onClick={() => {
            this.handelClick();
          }}
        />
        <hr />
      </div>
    );
  }
}

export default App;
