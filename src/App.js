import React from 'react'
import {Route} from 'react-router-dom';
import BookCase from './BookCase.js';
import SearchPage from './SearchPage.js';
import * as BooksAPI from './BooksAPI.js';
import './App.css';
class BooksApp extends React.Component {
  state = {
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
