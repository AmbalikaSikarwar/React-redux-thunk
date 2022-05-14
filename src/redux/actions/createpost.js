import axios from "axios"; 
import {CREATE_POST, SHOW_ERROR} from './types';

export const getCreatePost = (data) => {
  console.log('1111', data)
const token = localStorage.getItem("user-token");
const id = localStorage.getItem("user-Id");

let headers = {
    "Content-Type": "application/json",
    "Authorization": token,
};
const api = "https://react-rails-api-demo.herokuapp.com/api/v1/posts";
const body = {
  post: {
    "title": data.title,
    "description": data.description,
    "user_id":id,
  },
};

return (dispatch) => {
  axios
    .post(api,body, {
      headers: headers
    })
    .then((responce) => {
      console.log("createapiresponce", responce);
      dispatch({
        type: CREATE_POST,
        payload: responce,
      });
    })
    .catch((error) => {
      dispatch({
        type: SHOW_ERROR,
        payload: error,
      });
    });
};
};

export default getCreatePost;