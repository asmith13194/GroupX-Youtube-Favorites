import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';import Card from './Card'
import {
  fetchData,
  getFavorite, } from '../actions.js'

class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.searchReducer.results.length === 0 ?
    this.props.fetchData('music') : null;
    this.props.getFavorite();
  }

  render() {
    const {
      searchReducer,
      favoritesReducer, } = this.props;

    return (
      <div
        id='search-container'
        className='card-container'
      >

        {
          searchReducer.results.map(video=> <Card
            key={video.id.videoId}
            id={video.id.videoId}
            video={{
              title: video.snippet.title,
              description: video.snippet.description,
              thumbnail: video.snippet.thumbnails.high.url
            }}
            isFavorite={favoritesReducer.favorites.filter(favorite => {
              return favorite.videoId === video.id.videoId
            }).length !== 0 }/>)
          }

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    searchReducer: state.searchReducer,
    favoritesReducer: state.favoritesReducer
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchData,
    getFavorite, }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps, null)(SearchContainer));
