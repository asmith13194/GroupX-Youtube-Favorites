import React, { Component } from 'react';
// import '../App.sss';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { video } = this.props;

    return (
      <div
        id={`card-${video.id.videoId}`}
        className={'card'}
      >

        <img
          id={`card-thumbnail-${video.id.videoId}`}
          className={'card-img'}
          src={video.snippet.thumbnails.high.url}
          alt={'not found'}
        />

        <div
          id={`card-content-${video.id.videoId}`}
          className={'card-content'}
          >

          <h4
            id={`card-title-${video.id.videoId}`}
            className={'card-title'}
          >
            {video.snippet.title}
          </h4>

          <p
            id={`card-description-${video.id.videoId}`}
            className={'card-description'}
          >
            {video.snippet.description}
          </p>

          <p
            id={`card-length-${video.id.videoId}`}
            className={'card-length'}
          >
            {video.snippet.length}
          </p>

          <button
            id={`card-favorites-button-${video.id.videoId}`}
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
