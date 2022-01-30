import * as types from '../constants/actionTypes';

const initialState = {
  searchResults: [],
};

const mainReducer = (state = initialState, action) => {

  switch (action.type) {
    case types.GET_RESULTS:
      return {
        ...state,
        searchResults: action.payload,
      }
    default:
      return state;
  }
};

export default mainReducer;
