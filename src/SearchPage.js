import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Book from './Book.js';
import * as BooksAPI from './BooksAPI.js';
class SearchPage extends Component {

	state = {
		queriedBooks: []
	}

	queryBooks = (query) => {
		if (query === "") {
			this.setState({
				queriedBooks: []
			})
		}
		else{
			
			BooksAPI.search(query)
			.then((books) => {
				var newBooks = []
				books.map((book) => {
					if (this.props.bookshelves.has(book.id) ) {
						newBooks.push(this.props.bookshelves.get(book.id))
					} else {
						book.shelf="none"
						newBooks.push(book)
					}
				})
				this.setState({
					queriedBooks: newBooks
				})
			})
		}
	}

	render() {
		return(
	          <div className="search-books">
	            <div className="search-books-bar">
	              <Link className="close-search" to="/" > Close </Link>
	              <div className="search-books-input-wrapper">
	                <input type="text" placeholder="Search by title or author" onChange={(event) => this.queryBooks(event.target.value)}/>

	              </div>
	            </div>
	            <div className="search-books-results">
	              <ol className="books-grid">
	              	{
	                	this.state.queriedBooks.map((queriedBook) => (
	                		<li>
	                			<Book book={queriedBook} shelf={queriedBook.shelf} reassignBook={this.props.reassignBook}/>
	                		</li>
	                	))
	                }
	              </ol>
	            </div>
	          </div>				
			)
	}
}

export default SearchPage