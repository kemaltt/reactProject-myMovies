import "./App.css";
import { Component } from "react/cjs/react.production.min";
import SearchBar from "./components/SearchBar";
import CardList from "./components/CardList";
import axios from "axios";

export default class App extends Component {
  state = {
    moviesList: [],
  };

  handleFormSubmit = (value) => {
    console.log(value);
  };

  async componentDidMount() {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=274c12e6e2e4f9ca265a01d107280eba&language=en-US&page=1"
    );
    console.log(response.data.results);

    this.setState({ moviesList: response.data.results });
  }

  render() {
    return (
      <div>
        <SearchBar handleFormSubmit={this.handleFormSubmit} />
        <CardList moviesList={this.state.moviesList} />{" "}
      </div>
    );
  }
}
