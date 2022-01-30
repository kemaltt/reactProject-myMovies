import "./App.css";
import { Component } from "react/cjs/react.production.min";
import SearchBar from "./components/SearchBar";
import CardList from "./components/CardList";
import axios from "axios";

export default class App extends Component {
  state = {
    moviesList: [],
    searchQuery: "",
  };

  handleFormSubmit = (value) => {
    console.log(value);
    this.setState({ searchQuery: value });
  };

  async componentDidMount() {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=274c12e6e2e4f9ca265a01d107280eba&language=en-US&page=1"
    );
    console.log(response.data.results);

    this.setState({ moviesList: response.data.results });
  }

  render() {
    const filteredMovies = this.state.moviesList.filter((movie) => {
      return (
        movie.title
          .toLowerCase()
          .indexOf(this.state.searchQuery.toLowerCase()) !== -1
      );
    });
    return (
      <div>
        <SearchBar handleFormSubmit={this.handleFormSubmit} />
        <CardList moviesList={filteredMovies} />
      </div>
    );
  }
}
