module.exports = {

  addFavorite: (favorite) => {
    return {
      type: 'ADD_FAVORITE',
      payload: favorite
    };
  },

  fetchData: (query) => {
    return dispatch => {
      dispatch({ type: 'FETCH_DATA_START'})
      fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&key=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(
        data =>  dispatch({ type: 'FETCH_DATA_SUCCESS', payload: data.items }),
        err =>  dispatch({ type: 'FETCH_DATA_FAILURE', payload: err })
      );
    }
  },

  changeSearch: (event) => {
    return {
      type: 'CHANGE_SEARCH',
      payload: event.target.value
    };
  },

};
