import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import {
  addFavorite, } from '../actions.js'

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      id,
      video,
      addFavorite, } = this.props;

    return (
      <button
        id={`card-favorites-button-${id}`}
        className={'favorites-button'}
        onClick={() => addFavorite({
          videoId: id,
          title: video.title,
          description: video.description,
          thumbnail: video.thumbnail
        })}
      >
        add to favorites
      </button>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    addFavorite, }, dispatch);

export default withRouter(connect(null, mapDispatchToProps, null)(Card));
