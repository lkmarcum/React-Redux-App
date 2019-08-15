import {
  getBreweries,
  FETCH_BREWERY_START,
  FETCH_BREWERY_SUCCESS,
  FETCH_BREWERY_FAIL
} from "../actions";

const initialState = {
  breweries: [],
  isLoading: false,
  error: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
