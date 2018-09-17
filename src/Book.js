import React, { Component } from "react";
import BookShelf from "./BookShelf.js";
import * as BooksAPI from "./BooksAPI";

class Book extends Component {
  render() {
    // If there is a cover image, display it. If not, this displays a placeholder and prevents an error.
    let cover = this.props.book.imageLinks
      ? this.props.book.imageLinks.thumbnail
      : `url("http://via.placeholder.com/128x193?text=No%20Cover")`;

    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 192,
              backgroundImage: `url("${cover}")`
            }}
          />
          <div className="book-shelf-changer">
            <select
              onChange={e =>
                this.props.ShelfChanger(this.props.book, e.target.value)
              }
              value={this.props.defaultValue}
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
        <div className="book-authors">{this.props.book.authors ? this.props.book.authors.join(' & ') : ''}</div>
      </div>
    );
  }
}

export default Book;
