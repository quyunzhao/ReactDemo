// 受控组件
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "zhangsan",
      password: "",
    };
  }

  handelClick = () => {
    // console.log(username);
    // console.log(password);
  };

  handelChange = (e) => {
    const name = e.target.value;
    console.log(name);
    this.setState({
      username: name,
    });
  };

  pwdHandelChange = (e) => {
    console.log(e.target);
  };

  render() {
    return (
      <div>
        <hr />
        用户名:
        <input
          type="text"
          value={this.state.username}
          onChange={(e) => {
            this.handelChange(e);
          }}
        />
        <br />
        密&emsp;码:
        <input
          type="password"
          value={this.state.password}
          onChange={(e) => {
            this.pwdHandelChange(e);
          }}
        />
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
