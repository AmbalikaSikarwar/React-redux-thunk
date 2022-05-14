import axios from "axios";
import { REGISTER_USER} from "./types";
//import { useNavigate } from 'react-router-dom';
 
export const registeruser = (data) => {
  console.log('11111', data)
  const api = 'https://react-rails-api-demo.herokuapp.com/api/v1/signup'
  return (dispatch) => {
  console.log('22222', dispatch)
  
  axios.post(api,
     {
      user: {
         email: data.email,
         password: data.password,
         password_confirmation: data.password_confirmation
      }
     })

     .then((responce) => {
        console.log('3333res', responce)
        //localStorage.setItem("data", JSON.stringify(responce.data.token));
         // navigate('/Dashboard');

        //console.log('registertoken', responce.data.token)
       dispatch({
         type: REGISTER_USER,
         payload: data
       })
     })
     .catch((error) => {
       console.log('errror', error)
     })
 }
}
