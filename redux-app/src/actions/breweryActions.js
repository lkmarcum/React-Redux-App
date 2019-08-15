import axios from "axios";

export const FETCH_BREWERY_START = "FETCH_BREWERY_START";
export const FETCH_BREWERY_SUCCESS = "FETCH_BREWERY_SUCCESS";
export const FETCH_BREWERY_FAIL = "FETCH_BREWERY_FAIL";

export const getBreweries = state => {
  return dispatch => {
    dispatch({ type: FETCH_BREWERY_START });
    axios
      .get(`https://api.openbrewerydb.org/breweries?by_state=${state}`)
      .then(res => {
        console.log("axios res: ", res);
        dispatch({ type: FETCH_BREWERY_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: FETCH_BREWERY_FAIL, paylod: err.response });
      });
  };
};
