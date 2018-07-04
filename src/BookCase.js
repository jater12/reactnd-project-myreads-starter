import React, {Component} from 'react';
import Book from './Book.js';
import BookShelf from './BookShelf.js';
import * as BooksAPI from './BooksAPI.js';
import SearchButton from './SearchButton.js';
class BookCase extends Component {

	state = {
		
	}

	componentDidMount() {
		this.props.loadBooks();
	}

	render() {
		return (

				<div className="list-books">
		            <div className="list-books-title">
		              <h1>MyReads</h1>
		            </div>
		            <div className="list-books-content">
		              <div>
		                <BookShelf books={Array.from(this.props.bookshelves.values()).filter(book => book.shelf === "currentlyReading")} bookshelfName="currentlyReading" reassignBook={this.props.reassignBook}/>
		                <BookShelf books={Array.from(this.props.bookshelves.values()).filter(book => book.shelf === "wantToRead")} bookshelfName="wantToRead" reassignBook={this.props.reassignBook}/>
		                <BookShelf books={Array.from(this.props.bookshelves.values()).filter(book => book.shelf === "read")} bookshelfName="read" reassignBook={this.props.reassignBook}/>
		              </div>
		            </div>
		            <SearchButton />
		          </div>
			)
	}

}

export default BookCase;