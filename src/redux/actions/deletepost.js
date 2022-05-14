import axios from "axios"; 
import {DELETE_DATA, SHOW_ERROR} from './types';

export const deleteposts = (id) => {
     console.log('delete data', id)
    const token = localStorage.getItem("user-token");
        const headers= {
        "Content-Type": "application/json",
        "Authorization": token,
      };
  
    return (dispatch) => {
      axios
        .delete(
          `https://react-rails-api-demo.herokuapp.com/api/v1/posts/${id}`,
          {headers:headers}
        )
        .then((responce) => {
          console.log("delete data", responce);
          
          // dispatch(getPostSuccess(responce.data))
          dispatch({
            type: DELETE_DATA,
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
  
export default deleteposts;  