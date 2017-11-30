import React, { Component } from 'react';
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
