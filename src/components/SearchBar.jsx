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
      <form className="form-container " onSubmit={this.handleSubmit}>
        <div className="form-row d-flex justify-content-center p-5 ">
          <h1>Movies</h1>
          <div className="col-4 ">
            <input
              onChange={this.handleInputChange}
              className="form-control ml-4 rounded-pill"
              placeholder="Search a movie"
              type="text"
              // value={this.state.value}
            />
          </div>
          <div className="col-1 ml-4">
            <input
              type="submit"
              className="btn btn-md btn-primary rounded-pill"
              value="Search"
            ></input>
          </div>
        </div>
      </form>
    );
  }
}
