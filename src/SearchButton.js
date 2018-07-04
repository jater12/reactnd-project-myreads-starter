import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class SearchButton extends Component {
	render() {
		return(
				<div className="open-search">
		              <Link to="/search"/>
		        </div>
			)
	}
}

export default SearchButton