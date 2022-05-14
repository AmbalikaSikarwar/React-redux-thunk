import {
  GET_AIRLINES_STARTED,
  GET_AIRLINES_SUCCESS,
  GET_AIRLINES_FAILURE,
} from './types';

import axios from 'axios';

export const getAirlines = () => {
  return dispatch => {
    dispatch(getAirlinesStarted());
    axios
      .get(`https://api.instantwebtools.net/v1/airlines`)
      .then(res => {
        dispatch(getAirlinesSuccess(res.data));
      })
      .catch(err => {
        dispatch(getAirlinesFailure(err.message));
      });
  };
};

const getAirlinesSuccess = (airlines) => ({
  type: GET_AIRLINES_SUCCESS,
  payload: airlines
});


const getAirlinesFailure = (error) => ({
  type: GET_AIRLINES_FAILURE,
  payload: {
    error
  }
});

const getAirlinesStarted = () => ({
  type: GET_AIRLINES_STARTED
});
