import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { description, length, title, thumbnail } = this.props.video;

    return (
      <div id='card'>

        <img id='card-thumbnail' src={thumbnail} alt={''}/>

        <h4 id='card-title'>{title}</h4>

        <p>{description}</p>

        <p>{length}</p>

      </div>
    );
  }
}

export default Card;
