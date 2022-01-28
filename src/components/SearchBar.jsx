import React, { Component } from "react";
import "./SearchBar.css";

export default class SearchBar extends Component {
  state = {
    value: "",
  };

  handleInputChange = (e) => {
    console.log(e.target.value);

    this.setState({ value: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.handleFormSubmit(this.state.value);
  };

  render() {
    return (
      <form className="form-container pt-4" onSubmit={this.handleSubmit}>
        <div className="form-row d-flex justify-content-center mb-5 ">
          <div className="col-6 ">
            <input
              onChange={this.handleInputChange}
              className="form-control"
              placeholder="Search a movie"
              type="text"
              value={this.state.value}
            />
          </div>
          <div className="col-1">
            <input
              type="submit"
              className="btn btn-md btn-primary"
              value="Search"
            ></input>
          </div>
        </div>
      </form>
    );
  }
}
