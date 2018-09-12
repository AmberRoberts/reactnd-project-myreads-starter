import React, { Component } from "react";
import BookShelf from "./BookShelf.js";
import * as BooksAPI from "./BooksAPI";

class Book extends Component {

// Handling events reference here: https://reactjs.org/docs/handling-events.html

// handles the bookshelf changer in selection menu
// TODO: why won't it automatically refresh?

ShelfChanger = (book, shelf) => {
    BooksAPI.update(book, shelf)
        .then(() => BooksAPI.getAll())
        .then(books => this.setState({ books }))
  }

  render() {
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{ width: 128, height: 192, backgroundImage: `url("${this.props.book.imageLinks.thumbnail}")` }}
          />
          <div className="book-shelf-changer">
            <select
            onChange={(e) =>
            this.ShelfChanger(this.props.book, e.target.value)
            }
            value={this.props.book.shelf}
            >
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.authors}</div>
      </div>
    );
  }
}

export default Book;
