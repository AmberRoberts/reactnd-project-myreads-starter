import React, { Component } from "react";
import { Link } from "react-router-dom";
import escapeRegExp from 'escape-string-regexp'
import Book from "./Book"
import * as BooksAPI from "./BooksAPI"

class SearchPage extends React.Component {

// state for query in search field, set an array to hold search results
  state = {
    query: '',
    searchResults: []
  }

// when text is typed in search field, state updates
  updateQuery = (query) => {
  this.setState({ query });
  console.log(query)
  this.searchResults(query);
}

// the query state uses the search method to fetch the books and create an array of search results
searchResults = (query) => {
  if (query) {
  BooksAPI.search(query).then((searchResults) => {
    this.setState({ searchResults })
})
} else {
  console.log("no results")
}
}
  render() {

    const {query, searchResults} = this.state

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            {/*
            NOTES: The search from BooksAPI is limited to a particular set of search terms.
            You can find these search terms here:
            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
            you don't find a specific author or title. Every search is limited by search terms.
          */}
            <input type="text" placeholder="Search by title or author"
            value={query}
            onChange = {(e) => this.updateQuery(e.target.value)}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          <h2>{this.state.query}</h2>
{/* Filter BooksAPI to display books that match the search results from searchResults array */}
          {searchResults.map(searchResults => (
            <li key={searchResults.id}>
            <Book book={searchResults} />
            </li>
          ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchPage;
