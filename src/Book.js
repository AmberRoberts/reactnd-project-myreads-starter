import React, {Component} from 'react';
import BookShelf from './BookShelf.js'

class Book extends Component {
  render() {
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: 'url("http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api")' }}></div>
          <div className="book-shelf-changer">
            <select>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">The Hobbit</div>
        <div className="book-authors">J.R.R. Tolkien</div>
      </div>
    );
  }
}

  export default Book;


  // TODO: these things
  /*

  // TODO: add state in a class Book extends React.Component using constructor and super then this.state = {}, modify state with setState
  state = {
  shelf: 'none' // Not on a shelf until added
  }

  componentDidMount() {

  }

  change shelf on selection - check out add/remove contacts from contacts project for changing the books from shelf to shelf

  render() {
  return book info here
  }

  */
