# Amber's MyReads Project

This is project 6 for Udacity's Frontend NanoDegree (FEND) course. The goal of this project was to create an app that keeps track of book shelves, and allows the user to sort books to Currently Reading, Want to Read, and Read shelves, as well as search for new books to add.  I used the [starter code](https://github.com/udacity/reactnd-project-myreads-starter) provided by Udacity.

## Project Dependencies
* install all project dependencies with `npm install`
* start the development server with `npm start`

## How I Completed This Project
My first steps were to break down the pieces and decide which were most useful as their own components. Each component was put into a JS file, and I imported them where they were necessary.

## Backend Server

[`BooksAPI.js`](src/BooksAPI.js) was provided by Udacity, it contains the methods used to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. I set the correct state for results on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## References and Thanks

* Refreshed my react memory with [Learn React JS in 5 Minutes](https://medium.freecodecamp.org/learn-react-js-in-5-minutes-526472d292f4)
* [Searching with React](https://survivejs.com/webpack/appendices/searching-with-react/)
* [Conditional Rendering](https://reactjs.org/docs/conditional-rendering.html)
* [Handling Events](https://reactjs.org/docs/handling-events.html)
* [Building a Chat App](https://scrimba.com/g/greactchatkit) offered some fantastic tips that got me started with the project. 
* React course material via Udacity leading up to the project. Specifically, I referenced the Contacts app that was built during the lessons.
* Slack boards: FEND Project 6, FEND Live Help, Explain it to Me Like I'm 5, and my amazing_codehort_fend cohort
* DMs with these spectacular mentors and code ninjas: Derick Gross, Jason Tracy, AnnMargaret Tutu
