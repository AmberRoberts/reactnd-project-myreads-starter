import React, {Component} from 'react';
import Book from './Book.js'
import { Link } from 'react-router-dom'
class BookShelf extends Component {

  render() {
    return (
  <div className="list-books">
  <div className="list-books-title">
    <h1>MyReads</h1>
  </div>
  <div className="list-books-content">
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          { /* Filter to select books for this specific shelf, then map to create a new array to display here */ }
          {this.props.books.filter(book => book.shelf === "currentlyReading").map(book => (
            <li key={book.id}>
            <Book book={book} />
            </li>
          ))}
          </ol>
        </div>
      </div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">Want to Read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          {this.props.books.filter(book => book.shelf === "currentlyReading").map(book => (
            <li key={book.id}>
            <Book book={book} />
            </li>
          ))}
          </ol>
        </div>
      </div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">Read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          {this.props.books.filter(book => book.shelf === "currentlyReading").map(book => (
            <li key={book.id}>
            <Book book={book} />
            </li>
          ))}
          </ol>
        </div>
      </div>
    </div>
  </div>
  <div className="open-search">
  <Link to="/search">SearchPage /></Link>
  </div>
</div>
);
}
}

export default BookShelf
