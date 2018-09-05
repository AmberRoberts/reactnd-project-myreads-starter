import React, {Component} from 'react';
import BookShelf from './BookShelf.js'
import ShelfChanger from './ShelfChanger'
class Book extends Component {

  render() {
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: 'url("")' }}></div>
          <div className="book-shelf-changer">
            <select
            onChange={(e) => this.props.moveBook(this.props.book, e.target.value)}>
              <option value="move" disabled>Move to...</option>
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


  // TODO: these things
  /*

  // TODO: modify state with setState
  state = {
  shelf: 'none' // Not on a shelf until added
  }

  componentDidMount() {

  }

  change shelf on selection - check out add/remove contacts from contacts project for changing the books from shelf to shelf

  */
