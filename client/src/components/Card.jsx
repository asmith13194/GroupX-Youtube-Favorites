import React, { Component } from 'react';
import FavoritesAddButton from './FavoritesAddButton';
import FavoritesDeleteButton from './FavoritesDeleteButton';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      id,
      video,
      isFavorite, } = this.props;

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
            <FavoritesDeleteButton id={id}/>
            :
            <FavoritesAddButton id={id} video={video}/>
          }



        </div>

      </div>
    );
  }
}

export default Card;
