import { combineReducers } from 'redux';

const searchReducer = (state = {
  query: '',
  results: [],
  isFetching: false,
  selectedVideo: null }, action) => {
 switch(action.type) {
  case 'CHANGE_SEARCH':
    return {
      ...state,
      query: action.payload}
  case 'FETCH_DATA_START':
    return {
      ...state,
      isFetching: !state.isFetching
    }
  case 'FETCH_DATA_SUCCESS':
    return {
      ...state,
      results: action.payload,
      isFetching: !state.isFetching
    }
  case 'FETCH_DATA_FAILURE':
    return {
      ...state,
      error: action.payload,
      isFetching: !state.isFetching
    }
  default:
    return state;
 }
};

const favoritesReducer = (state = [], action) => {
 switch(action.type) {
   case 'GET_FAVORITE_START':
     return {
       ...state,
       isFetching: !state.isFetching
     }
   case 'GET_FAVORITE_SUCCESS':
     return {
       ...state,
       results: action.payload,
       isFetching: !state.isFetching
     }
   case 'GET_FAVORITE_FAILURE':
     return {
       ...state,
       error: action.payload,
       isFetching: !state.isFetching
     }
   case 'ADD_FAVORITE_START':
     return {
       ...state,
       isFetching: !state.isFetching
     }
   case 'ADD_FAVORITE_SUCCESS':
     return {
       ...state,
       results: action.payload,
       isFetching: !state.isFetching
     }
   case 'ADD_FAVORITE_FAILURE':
     return {
       ...state,
       error: action.payload,
       isFetching: !state.isFetching
     }
   case 'DELETE_FAVORITE_START':
     return {
       ...state,
       isFetching: !state.isFetching
     }
   case 'DELETE_FAVORITE_SUCCESS':
     return {
       ...state,
       results: action.payload,
       isFetching: !state.isFetching
     }
   case 'DELETE_FAVORITE_FAILURE':
     return {
       ...state,
       error: action.payload,
       isFetching: !state.isFetching
     }

  default:
    return state;
 }
};

const rootReducer = combineReducers({
  searchReducer,
  favoritesReducer,
});

export default rootReducer;
