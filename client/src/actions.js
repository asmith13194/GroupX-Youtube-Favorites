module.exports = {

  getFavorite: () => {
    return dispatch => {
      dispatch({ type: 'GET_FAVORITE_START'})
      fetch(`http://localhost:8001/favorites`)
      .then(res => res.json())
      .then(
        data =>  dispatch({ type: 'GET_FAVORITE_SUCCESS', payload: data.items }),
        err =>  dispatch({ type: 'GET_FAVORITE_FAILURE', payload: err })
      );
    }
  },

  addFavorite: (favorite) => {
    return dispatch => {
      dispatch({ type: 'ADD_FAVORITE_START'})
      fetch(`http://localhost:8001/favorites/add`)
      .then(res => res.json())
      .then(
        data =>  dispatch({ type: 'ADD_FAVORITE_SUCCESS', payload: data.items }),
        err =>  dispatch({ type: 'ADD_FAVORITE_FAILURE', payload: err })
      );
    }
  },

  deleteFavorite: (videoId) => {
    return dispatch => {
      dispatch({ type: 'DELETE_FAVORITE_START'})
      fetch(`http://localhost:8001/favorites/delete/${videoId}`)
      .then(res => res.json())
      .then(
        data =>  dispatch({ type: 'DELETE_FAVORITE_SUCCESS', payload: data.items }),
        err =>  dispatch({ type: 'DELETE_FAVORITE_FAILURE', payload: err })
      );
    }
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

  changeQuery: (event) => {
    return {
      type: 'CHANGE_QUERY',
      payload: event.target.value
    };
  },

};
