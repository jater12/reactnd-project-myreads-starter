import React, {Component} from 'react';
import {Link} from 'react-router-dom';

function SearchButton(props) {

	return(
				<div className="open-search">
		              <Link to="/search"/>
		        </div>
		)

}

export default SearchButton