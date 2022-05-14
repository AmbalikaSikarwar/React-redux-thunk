import {
  GET_LOGIN_STARTED,
  GET_LOGIN_SUCCESS,
  GET_LOGIN_FAILURE,
  GET_LOGOUT_SUCCESS,
} from './types';
import axios from 'axios';
import { toast } from 'react-toastify';

export const getLogin = (data) => {
  console.log(data)

  return dispatch => {
    dispatch(getLoginStarted());
    const body = {
      "user": {
        "email": data.email,
        "password":  data.password
      }
    }
    
    axios
      .post(`https://react-rails-api-demo.herokuapp.com/api/v1/signin`, body)
      .then(res => {
        localStorage.setItem('user-token', res.data.token);
        localStorage.setItem('user-Id', JSON.stringify(res.data.user.id));
        dispatch(getLoginSuccess(res.data));
      
      }
      )
      
      .catch(err => {
        toast.error("invalid username & pwd")
        dispatch(getLoginFailure(err.message));
      });
  };
};

const getLoginSuccess = (res) => ({
  type: GET_LOGIN_SUCCESS,
  payload: res
});


const getLoginFailure = (error) => ({
  type: GET_LOGIN_FAILURE,
  payload: {
    error
  }
});

const getLoginStarted = () => ({
  type: GET_LOGIN_STARTED
});


export const getLogout = (data) => {
  return dispatch => {
    dispatch(getLogoutSuccess());
  };
};


const getLogoutSuccess = () => ({
  type: GET_LOGOUT_SUCCESS
});

