import React, {Component} from 'react';
import Book from './Book.js'
import ShelfChanger from './ShelfChanger.js'
import { Link } from 'react-router-dom'

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
      name: 'currentlyReading'
      books={this.props.books}
      moveBook={this.props.moveBook}
      />

    <BookShelf
      name: 'wantToRead'
      books={this.props.books}
      moveBook={this.props.moveBook}
      />

      <BookShelf
        name: 'read'
        books={this.props.books}
        moveBook={this.props.moveBook}
        />

export default BookCollection
