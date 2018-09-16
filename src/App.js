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
    // get the index of the book in the state and assign it to a variable
    const bookIndex = this.state.books.findIndex(
      oldBook => oldBook.id === book.id
    );
    // create a newState variable
    let newState;
    // if the book is in the state
    if (bookIndex !== -1) {
      // assign the state object to the newState object variable
      newState = Object.assign({}, this.state.books);
      // update the shelf of that book in the newState
      newState[bookIndex].shelf = shelf;
    }
    // call the update API
    BooksAPI.update(book, shelf);
    // set the state to the newState just created.
    this.setState({ newState });
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
              shelf={this.currentShelf}
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
