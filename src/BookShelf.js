import React, { Component } from "react";
import Book from "./Book";
import BookCollection from "./BookCollection";

/* This component sorts books into the proper shelves via .filter and .map, using this.props.currentShelf. It also makes use of the ShelfChanger function to change the shelf based on the selection menu. */

class BookShelf extends Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelfName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {/* Filter to select books for this specific shelf, then map to create a new array to display here */}
            {this.props.books
              .filter(book => book.shelf === this.props.currentShelf)
              .map(book => (
                <li key={book.id}>
                  <Book
                    book={book}
                    currentShelf={this.currentShelf}
                    ShelfChanger={this.props.ShelfChanger}
                    defaultValue={book.shelf}
                  />
                </li>
              ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default BookShelf;
