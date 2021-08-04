import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './SearchBar.scss'

const SearchBar = () => {
    return ( 
        <div className="search-bar">

        <input className="search-bar__input" type="text" placeholder="Search" />
        <button className="search-bar__button">
            <FontAwesomeIcon className="search-bar__icon" icon={faSearch} /> 
        </button>
           
        
        
      </div>
     );
}
 
export default SearchBar;
