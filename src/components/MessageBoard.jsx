import React, { Component } from "react";
import Message from "./Message";
import NewMessage from "./NewMessage";
import "./styles.css";

class MessageBoard extends Component {
  state = {
    buttonVisibility: "visible",
    buttonDisplay: "none",
    newMessageVisibility: "collapse",
    newMessageDisplay: "none",
    messages: [
      {
        header: "Starter1",
        content: "content",
        id: 1,
      },
      { header: "Starter2", content: "content", id: 0 },
    ],
    currentHeader: "",
    currentContent: "",
  };

  callbackFunction = (header, content) => {
    this.setState({ currentHeader: header });
    this.setState({ currentContent: content });
  };

  render() {
    return (
      <div className="MessageBoard" style={{ marginTop: 40 }}>
        <NewMessage
          onPost={this.post}
          onDelete={this.changeVisibility}
          visibility={this.state.newMessageVisibility}
          display={this.state.newMessageDisplay}
          parentCallback={this.callbackFunction}
        />
        <div id="container">
          <button
            style={{ visibility: this.state.buttonVisibility }}
            id="button"
            className="button"
            onClick={this.changeVisibility}
          >
            New Post
          </button>
        </div>
        {this.state.messages.map((messages) => (
          <Message
            key={messages.id}
            onDelete={this.deletePost}
            header={messages.header}
            content={messages.content}
          />
        ))}
        <div id="container">
          <button
            className="button"
            onClick={this.clear}
            style={{ marginTop: 15 }}
          >
            Clear
          </button>
        </div>
      </div>
    );
  }

  clear = () => {
    const messages = [];
    this.setState({ messages });
  };

  post = () => {
    const messages1 = this.state.messages;
    const newMessage = [
      {
        header: this.state.currentHeader,
        content: this.state.currentContent,
        id: messages1.length,
      },
    ];
    const messages = newMessage.concat(messages1);
    this.setState({ messages });
    this.changeVisibility();
  };

  deletePost = (messageId) => {
    const messages = this.state.messages.filter((c) => c.id !== messageId);
    this.setState({ messages });
  };

  changeVisibility = () => {
    let buttonVisibility = "";
    buttonVisibility +=
      this.state.buttonVisibility === "visible" ? "collapse" : "visible";
    this.setState({ buttonVisibility });

    let buttonDisplay = "";
    buttonDisplay += this.state.buttonDisplay === "flex" ? "none" : "flex";
    this.setState({ buttonDisplay });

    let newMessageVisibility = "";
    newMessageVisibility +=
      this.state.newMessageVisibility === "visible" ? "collapse" : "visible";
    this.setState({ newMessageVisibility });

    let newMessageDisplay = "";
    newMessageDisplay +=
      this.state.newMessageDisplay === "flex" ? "none" : "flex";
    this.setState({ newMessageDisplay });
  };
}

export default MessageBoard;

// handleNewPost = () => {
//     const buttonVisibility = "collapse";
//     this.setState({ buttonVisibility });
//     const buttonDisplay = "none";
//     this.setState({ buttonDisplay });
//     const newMessageVisibility = "visible";
//     this.setState({ newMessageVisibility });
//     const newMessageDisplay = "flex";
//     this.setState({ newMessageDisplay });
//   };
