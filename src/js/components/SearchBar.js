import React from 'react';
import '../../styles/OriginDest.css';

function SearchBar (props) {
  return (
    <div className='search-wrapper'>
      <div className='search-wrapper2'>
        <div className="location-search-icon fa fa-search" style={{color: "white", fontSize: "1em"}}></div>
        <input className="location-search-box" type='text' onChange={ props.handleLocation } placeholder="Search"></input>
      </div>
    </div>
  )
}

export default SearchBar;
