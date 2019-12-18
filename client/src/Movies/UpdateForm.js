import React, { Component } from "react";

export default class UpdateForm extends Component {
  state = {
    title: "",
    director: "",
    metascore: "",
    stars: []
  };

  changeHandler = e => {
    e.persist(); // makes the text persistent by putting it into persistent storage //
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="form-cont">
        <form className="form">
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.changeHandler}
          ></input>
          <input
            type="text"
            name="director"
            value={this.state.director}
            onChange={this.changeHandler}
          ></input>
          <input
            type="text"
            name="metascore"
            value={this.state.metascore}
            onChange={this.changeHandler}
          ></input>
          <input
            type="text"
            name="stars"
            value={this.state.stars}
            onChange={this.changeHandler}
          ></input>
          <button type="submit">Submit Edit</button>
        </form>
      </div>
    );
  }
}
