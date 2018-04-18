import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/OriginDest.css';

function Header (props) {
  return (
    <div className="location-header nav justify-content-center">
      <Link to={ props.previousLink }>
        <div className="location-header-arrow fa fa-arrow-left" style={{fontSize: "1.5em"}}></div>
      </Link>
      <h2 className="location-header-text">{ props.headerTitle }</h2>
    </div>
  )
}

export default Header;
