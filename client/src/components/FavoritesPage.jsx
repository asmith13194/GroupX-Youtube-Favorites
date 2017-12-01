import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FavoritesContainer from './FavoritesContainer';

class FavoritesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>

        <Link
          className={'nav-link'}
          to={'./'}
        >
          Home
        </Link>

        <h4
          id={'favorites-page-title'}
          className={'page-title'}
        >
          Favorites
        </h4>

        <FavoritesContainer />

      </div>
    );
  }
}

export default FavoritesPage;
