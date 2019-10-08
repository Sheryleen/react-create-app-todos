import React, { Component, Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

class App extends Component {
  state = {
    todos: [],
    message: ""
  };
  componentDidMount() {
    axios.get("http:localhost:8000/api/message").then(res => {
      this.setState({ message: res.data });
    });
  }
  render() {
    return (
      <Fragment>
        <div> FS TODO APP</div>
        <div>Message:{this.state.message} </div>
      </Fragment>
    );
  }
}

export default App;
