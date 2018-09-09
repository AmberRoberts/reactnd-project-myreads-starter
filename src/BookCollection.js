import React, { Component } from "react";
import BookShelf from "./BookShelf";
import Book from "./Book";
import { Link } from "react-router-dom";

/* this component gives each bookshelf its individual info including name, and tells the bookshelf.js .filter/.map which shelves each book should be shelved on (via shelve) */

class BookCollection extends Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf
              shelfName="Currenly Reading"
              shelve="currentlyReading"
              books={this.props.books}
              ShelfChanger={this.props.ShelfChanger}
            />

            <BookShelf
              shelfName="Want to Read"
              shelve="wantToRead"
              books={this.props.books}
              ShelfChanger={this.props.ShelfChanger}
            />

            <BookShelf
              shelfName="Read"
              shelve="read"
              books={this.props.books}
              ShelfChanger={this.props.ShelfChanger}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to="search">Add a book</Link>
        </div>
      </div>
    );
  }
}
export default BookCollection;
