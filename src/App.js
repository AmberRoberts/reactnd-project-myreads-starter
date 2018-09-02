import React, {Componment} from 'react';
import { Route, Link } from 'react-router-dom'
import SearchPage from './SearchPage.js'
import BookShelf from './BookShelf.js'
import Book from './Book.js'
import * as BooksAPI from './BooksAPI'
import './App.css'



// TODO: check contacts app render for router / page changes / browser router for pages
/* TODO: change shelf via arrow function and this.setState & filter/map? */
// TODO: reference: https://medium.freecodecamp.org/learn-react-js-in-5-minutes-526472d292f4

class BooksApp extends React.Component {
  state = {
    books: []
  }

// creates an API request when the component mounts
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

// renders info on the page
  render() {
    return (
      <div className="app">
      {/* For exact path, render the book shelf */}
      <Route exact path="/" render={() => (
      <BookShelf books={this.state.books} />
    )} />
      {/* Or render the search page for /search */}
      <Route path="/search" render={() => (
        <SearchPage />
      )} />
      </div>
  )
}
}

export default BooksApp
