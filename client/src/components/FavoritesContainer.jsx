import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import Card from './Card'
import {
  getFavorite, } from '../actions.js'

class FavoritesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getFavorite();
  }

  render() {
    const { favoritesReducer } = this.props;

    return (
        <div
          id='favorites-container'
          className='card-container'
        >

          {favoritesReducer.favorites.map(video => <Card
            key={video.videoId}
            id={video.videoId}
            video={video}
            isFavorite={true}/>)
          }

        </div>

    );
  }
}


function mapStateToProps(state) {
  return { favoritesReducer: state.favoritesReducer };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getFavorite, }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps, null)(FavoritesContainer));
