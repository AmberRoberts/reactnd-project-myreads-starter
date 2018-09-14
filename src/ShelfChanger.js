import React, { Component } from "react";
import BookShelf from "./BookShelf.js";
import * as BooksAPI from "./BooksAPI";
import Book from './Book';

class ShelfChanger extends Component {

ShelfChanger = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then(()=>BooksAPI.getAll())
    .then(books=> this.setState({ books: books }))
        console.log(`Book moved to ${shelf}`);
};


  render() {

    return (
      <BookCollection />
    );
  }

export default ShelfChanger;
