import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class FavoritesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { favoritesReducer } = this.props;

    return (
      <div>

        <Link className={'nav-link'} to={'./'}>Home</Link>

        <h4>Favorites</h4>

        <div id='favorites-container'>

        </div>

      </div>
    );
  }
}


function mapStateToProps(state) {
  return { favoritesReducer: state.favoritesReducer };
}

export default withRouter(connect(mapStateToProps, null, null)(FavoritesPage));
