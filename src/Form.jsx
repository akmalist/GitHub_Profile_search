import React from "react";
import "./styles.css";

class Form extends React.Component {
  state = { userName: "" };

  handleSubmit = async event => {
    event.preventDefault();
    const response = await fetch(
      `https://api.github.com/users/${this.state.userName}`
    );
    let data = await response.json();
    this.props.onSubmit(data);
    this.setState({ userName: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.userName}
          onChange={event => this.setState({ userName: event.target.value })}
          placeholder="GitHub username"
          required
        />
        <button> Add User</button>
      </form>
    );
  }
}

export default Form;
