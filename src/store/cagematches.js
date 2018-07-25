import axios from 'axios';
import {apiDomain} from '../api';

const initialState = {
  cagematches: []
};

// Action Types
export const GOT_CAGEMATCHES = 'GOT_CAGEMATCHES';

// Action Creators
export const gotCagematches = cagematches => ({
  type: GOT_CAGEMATCHES,
  cagematches
});

// Thunk Creators
export const fetchCagematches = () => async dispatch => {
  try {
    const res = await axios.get(`${apiDomain}/cagematches.json`);
    dispatch(gotCagematches(res.data) || []);
  } catch (err) {
    console.error(err);
  }
};

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case GOT_CAGEMATCHES:
      return {
        ...state,
        cagematches: action.cagematches
      };
    default:
      return state;
  }
};
