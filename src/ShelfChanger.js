import React, {Component} from 'react';
import Book from './Book'
import BookShelf from './BookShelf'
import BookCollection from './BookCollection'
import * as BooksAPI from "./BooksAPI"

class ShelfChanger extends Component {

ShelfChanger = (book, shelf) => {
  BooksAPI.update(book, shelf);
  }

  render() {
    return (
  <BookShelf />
);
}
}

export default ShelfChanger
