import {
 SHOW_POST , SHOW_ERROR
} from '../actions/types';

const initState = {
    post: []
  }

  const showPost = (state=initState,action) => {
    switch (action.type){
      case SHOW_POST:
        return {
          ...state,
           post: action.payload   
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
export default showPost;        