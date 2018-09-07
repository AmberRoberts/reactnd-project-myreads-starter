import React, { Componment } from "react";
import { Route, Link } from "react-router-dom";
import SearchPage from "./SearchPage.js";
import Book from "./Book.js";
import * as BooksAPI from "./BooksAPI";
import BookCollection from "./BookCollection.js";
import "./App.css";

/* TODO: change shelf via arrow function and this.setState & filter/map? */
// TODO: reference: https://medium.freecodecamp.org/learn-react-js-in-5-minutes-526472d292f4

class BooksApp extends React.Component {
  state = {
    books: []
  };

  // creates an API request when the component mounts
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }

  // handles the bookshelf changer in selection menu
  moveBook(book, shelf) {
    BooksAPI.update(book, shelf).then;
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }

  // renders info on the page
  render() {
    return (
      <div className="app">
        {/* For exact path, render the book shelf */}
        <Route
          exact
          path="/"
          render={() => <BookCollection books={this.state.books} />}
        />
        {/* Or render the search page for /search */}
        <Route path="/search" render={() => <SearchPage />} />
      </div>
    );
  }
}

export default BooksApp;
