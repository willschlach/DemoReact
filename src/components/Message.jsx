import React, { Component } from "react";
import "./styles.css";
import icon from "./X_icon.png";

class Message extends Component {
  render() {
    return (
      <div id="container">
        <fieldset
          align="center"
          style={{
            backgroundColor: "#cceeff",
            borderColor: "darkblue",
            width: 600,
          }}
        >
          <legend>Message</legend>
          <div class="badge badge-primary text-wrap">
            <h1>{this.props.header}</h1>
            <h4>{this.props.content}</h4>
            <span id="vrx">
              <span id="replyButton">
                <button style={{ fontSize: 16, marginBottom: 4 }}>Reply</button>
                <button style={{ fontSize: 16 }}>View Replies</button>
              </span>
              <button onClick={() => this.props.onDelete(this.props.id)}>
                <img src={icon} alt="delete" />
              </button>
            </span>
          </div>
        </fieldset>
      </div>
    );
  }
}

export default Message;
