import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import {
  fetchData,
  changeSearch, } from '../actions.js'

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      fetchData,
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
              id={'search-button'}
              disabled={searchReducer.query === ''}
              onClick={() => fetchData(searchReducer.query)}
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
    fetchData,
    changeSearch, }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps, null)(SearchBar));
