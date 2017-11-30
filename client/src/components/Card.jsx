import React, { Component } from 'react';
// import '../App.sss';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { video, id } = this.props;

    return (
      <div
        id={`card-${id}`}
        className={'card'}
      >

        <img
          id={`card-thumbnail-${id}`}
          className={'card-img'}
          src={video.thumbnails.high.url}
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

          <p
            id={`card-length-${id}`}
            className={'card-length'}
          >
            {video.length}
          </p>

          <button
            id={`card-favorites-button-${id}`}
            className={'favorites-button'}
          >
            add to favorites
          </button>

        </div>

      </div>
    );
  }
}

export default Card;
