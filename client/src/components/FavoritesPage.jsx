import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import FavoritesContainer from './FavoritesContainer';

class FavoritesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>

        <SearchBar />

        <Link className={'nav-link'} to={'./'}>Home</Link>

        <FavoritesContainer />

      </div>
    );
  }
}

export default FavoritesPage;
