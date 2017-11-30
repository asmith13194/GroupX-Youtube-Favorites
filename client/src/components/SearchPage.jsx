import React, { Component } from 'react';
import SearchBar from './SearchBar'
import SearchContainer from './SearchContainer'

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>

        <h4>Welcome!</h4>

        <SearchBar />

        <SearchContainer />

      </div>
    );
  }
}

export default SearchPage;
