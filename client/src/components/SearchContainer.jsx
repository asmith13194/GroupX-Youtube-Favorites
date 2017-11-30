import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import Card from './Card'
import {
  addFavorite, } from '../actions.js'

class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      addFavorite,
      searchReducer,
      favoritesReducer, } = this.props;

      console.log(searchReducer);

    return (
      <div id='search-container'>

        {
          searchReducer.results.map((video, i)=> <Card
            key={video.id.videoId}
            id={video.id.videoId}
            video={video.snippet} />)
        }

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    searchReducer: state.searchReducer,
    favoritesReducer: state.favoritesReducer, };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addFavorite, }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps, null)(SearchContainer));
