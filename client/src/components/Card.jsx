import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import {
  addFavorite,
  deleteFavorite, } from '../actions.js'

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      id,
      video,
      isFavorite,
      addFavorite,
      deleteFavorite } = this.props;

    return (
      <div
        id={`card-${id}`}
        className={'card'}
      >

        <img
          id={`card-thumbnail-${id}`}
          className={'card-img'}
          src={video.thumbnail}
          alt={'not found'}
        />

        <div
          id={`card-content-${id}`}
          className={'card-content'}
          >

          <h4
            id={`card-title-${id}`}
            className={'card-title'}
          >
            {video.title}
          </h4>

          <p
            id={`card-description-${id}`}
            className={'card-description'}
          >
            {video.description}
          </p>

          {
            isFavorite ?
            <button
              id={`card-favorites-button-${id}`}
              className={'favorites-button'}
              onClick={() => deleteFavorite(id)}
            >
              remove from favorites
            </button>
            :
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
          }



        </div>

      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    addFavorite,
    deleteFavorite, }, dispatch);

export default withRouter(connect(null, mapDispatchToProps, null)(Card));
