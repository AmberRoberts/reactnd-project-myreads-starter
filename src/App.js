import React, { Componment } from "react";
import { Route, Link } from "react-router-dom";
import SearchPage from "./SearchPage";
import Book from "./Book";
import * as BooksAPI from "./BooksAPI";
import BookCollection from "./BookCollection";
import "./App.css";

class BooksApp extends React.Component {
  state = {
    books: []
  };

  // handles the bookshelf changer in selection menu
  ShelfChanger = (book, shelf) => {
      BooksAPI.update(book, shelf)
          .then(() => BooksAPI.getAll())
          .then(books => this.setState({ books }))
          console.log(`${book.title} moved to ${shelf}`);
  };

  // creates an API request when the component mounts
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
      console.log(books);
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
          render={() => (
            <BookCollection
              books={this.state.books}
              ShelfChanger={this.ShelfChanger}
              shelf={this.shelf}
            />
          )}
        />
        {/* Or render the search page for /search */}
        <Route
          path="/search"
          render={({ history }) => (
            <SearchPage
              books={this.state.books}
              ShelfChanger={this.ShelfChanger}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
