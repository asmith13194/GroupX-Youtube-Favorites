import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar'
import SearchContainer from './SearchContainer'

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>

        <SearchBar />

        <Link className={'nav-link'} to={'./favorites'}>Favorites</Link>

        <SearchContainer />

      </div>
    );
  }
}

export default SearchPage;
