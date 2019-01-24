import React, { Component } from "react";
import List from "./List/List";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      name: "",
      email: "",
      password: ""
    };
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  addUser = () => {
    let usersCopy = [...this.state.users];
    let newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    };
    usersCopy.push(newUser);
    this.setState({
      users: usersCopy,
      name: "",
      email: "",
      password: ""
    });
  };
  render() {
    let mappedUsers = this.state.users.map(user => (
      <List key={user.name} {...user} />
    ));
    return (
      <section>
        <form onSubmit={event => event.preventDefault()}>
          <label>Name:</label>{" "}
          <input
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
          />{" "}
          <label>Email:</label>
          <input
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
            type="email"
          />{" "}
          <label>Password:</label>
          <input
            name="password"
            onChange={this.handleChange}
            value={this.state.password}
            type="password"
          />
          <input type="submit" value="Register" onClick={this.addUser} />
        </form>
        {mappedUsers}
      </section>
    );
  }
}

export default Form;
