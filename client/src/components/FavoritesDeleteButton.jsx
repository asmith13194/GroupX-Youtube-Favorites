import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import {
  deleteFavorite, } from '../actions.js'

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      id,
      deleteFavorite } = this.props;

    return (
      <button
        id={`card-favorites-button-${id}`}
        className={'favorites-button'}
        onClick={() => deleteFavorite(id)}
      >
        remove
      </button>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    deleteFavorite, }, dispatch);

export default withRouter(connect(null, mapDispatchToProps, null)(Card));
