import {
    DELETE_DATA , SHOW_ERROR
   } from '../actions/types';
   
   const initState = {
       delete: []
     }
   
     const deletePost = (state=initState,action) => {
       switch (action.type){
         case DELETE_DATA:
           return {
             ...state,
              delete: action.payload   
           };
   
           case SHOW_ERROR:
               return {
                   ...state,
                   error:action.payload
               }
         
           default: 
           return state
       }
     }
   export default deletePost;        