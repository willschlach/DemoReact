import React, { Component } from "react";
import icon from "./X_icon.png";
import "./styles.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

class NewMessage extends Component {
  state = {
    header: "",
    content: "",
  };

  sendData = () => {
    this.props.parentCallback(this.state.header, this.state.content);
  };

  render() {
    return (
      <div
        id="container"
        style={{
          visibility: this.props.visibility,
          display: this.props.display,
        }}
      >
        <fieldset>
          <legend align="center" style={{ width: 300 }}>
            New Message
          </legend>
          <span id="newMessageSpan">
            <label for="title">Title</label>
            <input
              onChange={this.inputChange}
              type="text"
              id="title"
              minLength="4"
              maxLength="25"
            ></input>
            <label for="content">Content</label>
            <input
              onChange={this.inputChange}
              type="text"
              id="content"
              minLength="4"
              maxLength="100"
            ></input>
            <span id="newMessageButtons">
              <Button
                variant="outline-primary"
                onClick={() => {
                  this.post();
                  this.props.onPost();
                }}
              >
                Post
              </Button>
              <button onClick={this.props.onDelete}>
                <img src={icon} alt="delete" />
              </button>
            </span>
          </span>
        </fieldset>
      </div>
    );
  }

  post = () => {
    this.setState({ header: "", content: "" });
    document.getElementById("title").value = "";
    document.getElementById("content").value = "";
  };

  inputChange = () => {
    console.log(1 + this.state.header);
    this.setState({ header: document.getElementById("title").value });
    this.setState({ content: document.getElementById("content").value });
    console.log(2 + this.state.header);
    console.log(3 + document.getElementById("title").value);
    this.sendData();
  };
}

export default NewMessage;
