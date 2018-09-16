import React, { Component } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";
import * as BooksAPI from "./BooksAPI";
import BookCollection from "./BookCollection";

class SearchPage extends React.Component {
  // state for query in search field, set an array to hold search results
  state = {
    query: "",
    searchResults: []
  };

  // when text is typed in search field, state updates
  updateQuery = query => {
    this.setState({ query });
    console.log(query);
    this.searchResults(query);
  };

  // the query state uses the search method to fetch the books and create an array of search results

  // If there are search results, map. if no search results, no results will show.

  searchResults = query => {
    if (query) {
      BooksAPI.search(query).then(searchResults => {
        /* If there's an error or nothing matches the search results */
        if (searchResults.error) {
          this.setState({ searchResults: [] });
          console.log("No results");
        } else {
          /* If books match the search results, display the array*/
          this.setState({ searchResults });
        }
      });
    } else {
      /* Otherwise, clear the array and don't display any results */
      this.setState({ searchResults: [] });
    }
  };

  render() {
    const { query, searchResults } = this.state;

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

            Every search is limited by search terms.
          */}
          <input
           type="text"
           placeholder="Search by title or author"
           value={query}
           onChange={e => this.updateQuery(e.target.value)}
         />
       </div>
     </div>
     <div className="search-books-results">
       <h2>Your search {query} contains {searchResults.length} books. </h2>

       <ol className="books-grid">
         {/* Filter BooksAPI to display books that match the search results from searchResults array */}
         {this.state.searchResults.map(searchResults => {
           let defaultValue = "none";

           this.props.books.map(book => (
             book.id === searchResults.id ? defaultValue = book.shelf : ''
           ));
           console.log({defaultValue})

         return (
             <li key={searchResults.id}>
               <Book
                 book={searchResults}
                 defaultValue={defaultValue}
                 ShelfChanger={this.props.ShelfChanger}
               />
             </li>
           )
         })}
       </ol>
     </div>
   </div>
 );
}
}

export default SearchPage;
