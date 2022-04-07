import * as types from '../constants/actionTypes';

const initialState = {
  searchResults: [],
  favorites: [],
  savedResults: [],
  favsPageOn: false,
  firstRender: true,
  comments: [],
};

const mainReducer = (state = initialState, action) => {

  switch (action.type) {
    case types.GET_RESULTS:
      return {
          ...state,
          firstRender: false,
          searchResults: action.payload,
        }
    case types.ADD_FAV:
      const newFavs = state.favorites.slice();

      if (!state.favorites.includes(action.payload)) newFavs.push(action.payload);
      
      return {
        ...state,
        favorites: newFavs,
      }
    case types.TOGGLE_FAVS_PAGE:
      if (!state.favsPageOn) {

        return {
          ...state,
          savedResults: state.searchResults,
          searchResults: state.favorites,
          favsPageOn: true,
        }
      }
      return {
        ...state,
        searchResults: state.savedResults,
        saveResults: [],
        favsPageOn: false,
      }
    case types.ADD_COMMENT:
      const newComments = state.comments.slice();
      newComments.push(action.payload);

      return {
        ...state,
        comments: state.newComments,
      }
    case types.TOGGLE_COMMENTS:
      return {
        ...state,
      }
    default:
      return state;
  }
};

export default mainReducer;
