import {
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
    case FETCH_BREWERY_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case FETCH_BREWERY_SUCCESS:
      return {
        ...state,
        breweries: action.payload,
        isLoading: false,
        error: ""
      };
    case FETCH_BREWERY_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    default:
      return state;
  }
};
