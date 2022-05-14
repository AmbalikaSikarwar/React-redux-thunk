import {
    UPDATE_POST , SHOW_ERROR
   } from '../actions/types';
   
   const initState = {
       update: []
     }
   
     const updatePost = (state=initState,action) => {
       switch (action.type){
         case UPDATE_POST:
           return {
             ...state,
              update: action.payload   
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
   export default updatePost;        