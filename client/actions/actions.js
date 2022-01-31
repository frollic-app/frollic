import * as types from '../constants/actionTypes';
import axios from 'axios';

export const getResults = (location, radius, categories) => (dispatch) => {
  
  axios({
    method: 'POST',
    url: `/api/search`,
    headers: { 'Content-Type': 'application/JSON' },
    data: {
      location: location,
      radius: radius,
      categories: categories,
    }
  })
  .then((response) => {
    dispatch({
      type: types.GET_RESULTS,
      payload: response.data,
    });
  });
};