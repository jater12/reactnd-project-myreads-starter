import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css';
import BookCase from './BookCase.js';
import SearchPage from './SearchPage.js';
import {Route} from 'react-router-dom';
import * as BooksAPI from './BooksAPI.js';
class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    bookshelves: new Map()
  }

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    BooksAPI.getAll()
    .then((books) => {

      var newBookshelf = new Map();
      books.map((book) => {
        newBookshelf.set(book.id, book)
      })

      this.setState({
        bookshelves: newBookshelf
      })
    })
  }

  reassignBook = (book, newBookshelf) => {

    var newBookshelves = this.state.bookshelves;
    var newBook = book;
    newBook.shelf = newBookshelf
    newBookshelves.set(newBook.id, newBook)
    
    BooksAPI.update(newBook, newBookshelf)
    .then(()=>{
      this.setState((prevState) => ({
        bookshelves: newBookshelves
      }))
    }) 
  }


  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
            <BookCase loadBooks={this.loadBooks} reassignBook={this.reassignBook} bookshelves={this.state.bookshelves}/>
          )} />
        <Route path="/search" render={() => (
            <SearchPage bookshelves={this.state.bookshelves} reassignBook={this.reassignBook}/>
          )} />
      </div>
    )
  }
}

export default BooksApp
