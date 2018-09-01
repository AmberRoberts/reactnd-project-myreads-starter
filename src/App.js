import React, {Componment} from 'react';
// import { route } from 'react-router-dom'
import SearchPage from './SearchPage.js'
import BookShelf from './BookShelf.js'
// import Book from './Book.js'
// import * as BooksAPI from './BooksAPI'
import './App.css'



// TODO: Check out getAll in the contacts app for the componentDidMount API request
// TODO: check contacts app render for router / page changes
// TODO:  browser router for pages
/* TODO: change shelf via arrow function and this.setState & filter? */
/* TODO:
componentDidMount() {
BooksAPI.getAll().then((books) => {
this.setState({ books })
})
}
*/
// TODO: reference: https://medium.freecodecamp.org/learn-react-js-in-5-minutes-526472d292f4

class BooksApp extends React.Component {
  state = {
    showSearchPage: false
  }


  render() {
    return (
      <div className="app">
      <BookShelf />
      </div>
    )
  }
}

export default BooksApp
