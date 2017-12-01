import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import {
  fetchData,
  changeQuery, } from '../actions.js'

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      fetchData,
      changeQuery,
      searchReducer, } = this.props;

    return (
      <div id='search-bar'>

        <label>
          <input
            id={'query'}
            type={'text'}
            onChange={changeQuery}
            value={searchReducer.query}
          />

            <button
              id={'search-button'}
              disabled={searchReducer.query === ''}
              onClick={() => {
                this.props.history.push('/')
                fetchData(searchReducer.query)
              }}
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
    changeQuery, }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps, null)(SearchBar));
