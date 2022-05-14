import axios from "axios"; 
import {SHOW_POST, SHOW_ERROR} from './types';

export const showposts = () => {
    // console.log('11111', data)
    const token = localStorage.getItem("user-token");
        const headers= {
        "Content-Type": "application/json",
        "Authorization": token,
      };
  
    return (dispatch) => {
      axios
        .get(
          "https://react-rails-api-demo.herokuapp.com/api/v1/posts",
          {headers:headers}
        )
        .then((responce) => {
          console.log("show res", responce);
          
          // dispatch(getPostSuccess(responce.data))
          dispatch({
            type: SHOW_POST,
            payload: responce.data
          });
        })
        .catch((error) => {
          dispatch({
            type: SHOW_ERROR,
            payload: error
          });
        });
    };
  };
  
export default showposts;  