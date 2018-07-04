import React, {Component} from 'react';
import Book from './Book.js';

const values = {
	"currentlyReading":"Currently Reading",
	"wantToRead": "Want to Read",
	"read": "Read"
}


class BookShelf extends Component {

	render() {
		return (

				<div className="bookshelf">
                  <h2 className="bookshelf-title">{values[this.props.bookshelfName]}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    	{this.props.books.map((book) => (
                    		<li key={book.id}>
                    			<Book book={book} shelf={this.props.bookshelfName} reassignBook={this.props.reassignBook}/>
                    		</li>
                    		))}
                    </ol>
                  </div>
                </div>
			)

	}
}

export default BookShelf