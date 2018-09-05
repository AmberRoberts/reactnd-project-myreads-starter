import React, {Component} from 'react';
import Book from './Book.js'
import BookShelf from './BookShelf.js'

class ShelfChanger extends Component {

ShelfChanger = (e) => {
  let shelf = e.target.value;

  this.setState({ shelf }, () => {
    this.props.onChangeShelf(this.props.book, this.props.shelf)
  })
  }

  render() {
    return (
  <BookShelf />
);
}
}
export default ShelfChanger
