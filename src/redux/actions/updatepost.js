import axios from "axios"; 
import {UPDATE_POST, SHOW_ERROR} from './types';

export const updateposts = (id,title,description) => {
//   console.log('1111', data)
const token = localStorage.getItem("user-token");
// const id = localStorage.getItem("user-Id");

let headers = {
    "Content-Type": "application/json",
    "Authorization": token,
};
const api =`https://react-rails-api-demo.herokuapp.com/api/v1/posts/${id}`
const body = {
  post: {
    "title": title,
    "description": description,
  },
};

return (dispatch) => {
  axios
    .put(api,body, {
      headers: headers
    })
    .then((responce) => {
      console.log("update post", responce);
      dispatch({
        type: UPDATE_POST,
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

export default updateposts;