import React, { Componment } from "react";
import { Route, Link } from "react-router-dom";
import SearchPage from "./SearchPage";
import Book from "./Book";
import * as BooksAPI from "./BooksAPI";
import BookCollection from "./BookCollection";
import "./App.css";

// TODO: README
// TODO: Refresh on search page change
// TODO: Search page isn't showing the right shelf on selection
// TODO: reference: https://medium.freecodecamp.org/learn-react-js-in-5-minutes-526472d292f4

class BooksApp extends React.Component {
  state = {
    books: []
  };


// handles the bookshelf changer in selection menu
  ShelfChanger = (book, shelf) => {
      BooksAPI.update(book, shelf);
      BooksAPI.getAll()
      .then(books=> this.setState({ books }))
          console.log(`Book moved to ${shelf}`);
  };


  // creates an API request when the component mounts
  componentDidMount() {
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
          render={() => <BookCollection books={this.state.books}
          ShelfChanger={this.ShelfChanger}
          />}
        />
        {/* Or render the search page for /search */}
        <Route path="/search" render={() => <SearchPage
        books={this.state.books}
        ShelfChanger={this.ShelfChanger}

        />} />
      </div>
    );
  }
}

export default BooksApp;
