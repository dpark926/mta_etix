import React,{ Component } from 'react';
import { connect } from 'react-redux';
import handleType from '../actions/typeActions';
import '../../styles/OriginDest.css';

class SearchBar extends Component {
  handleOrigin = (event) => {
    this.props.handleOrigin( event.target.value );
  }

  render() {
    return (
      <div className='search-wrapper'>
        <div className='search-wrapper2'>
          <div className="location-search-icon fa fa-search" style={{color: "white", fontSize: "1em"}}></div>
          <input className="location-search-box" type='text' onChange={ this.handleOrigin } placeholder="Search"></input>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state;
};

const mapActionsToProps = {
  handleOrigin: handleType.handleOrigin
}

export default connect( mapStateToProps, mapActionsToProps )( SearchBar );
