import React, {Component} from 'react';

const values = [
	{
		key: "currentlyReading",
		value: "Currently Reading"
	},
	{
		key: "wantToRead",
		value: "Want to Read"
	},
	{
		key: "read",
		value: "Read"
	},
	{
		key: "none",
		value: "None"
	}
]



class Book extends Component {

	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.props.reassignBook(this.props.book, event.target.value);
	}
	
	render() {
		

		return(
			<div className="book">
		      <div className="book-top">
		      	{typeof this.props.book.imageLinks != "undefined" && (<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url(' + this.props.book.imageLinks.thumbnail + ')' }}></div>)}
		        {typeof this.props.book.imageLinks === "undefined" && (<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url()' }}></div>)}
		        <div className="book-shelf-changer">
		          <select id="choice" onChange={this.handleChange}>
		            <option value="move" disabled>Move to...</option>
					{values.map((option) => {
							if (option.key===this.props.book.shelf){
								return(<option key={option.key} value={option.key} selected>{option.value}</option>)
							} else {
								return(<option key={option.key} value={option.key}>{option.value}</option>)
							}
						})}		            
		          </select>
		        </div>
		      </div>
		      <div className="book-title">{this.props.book.title}</div>
		      {typeof this.props.book.authors != "undefined" && (<div className="book-authors">{this.props.book.authors.join(', ')}</div>)}
		    </div>
	    )
	}

}

export default Book;