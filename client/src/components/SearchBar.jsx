import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import {
  makeSearch,
  changeSearch, } from '../actions.js'

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      makeSearch,
      changeSearch,
      searchReducer, } = this.props;

    return (
      <div id='search-bar'>

        <label>
          <input
            id={'query'}
            type={'text'}
            onChange={changeSearch}
            value={searchReducer.query}
          />

            <button
              disabled={searchReducer.query === ''}
              id={'search-button'}
              onClick={makeSearch}
            >
              Search
            </button>

        </label>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    searchReducer: state.searchReducer, };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    makeSearch,
    changeSearch, }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps, null)(SearchBar));
