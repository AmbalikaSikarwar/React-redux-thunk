import {
  GET_AIRLINES_SUCCESS,
  GET_AIRLINES_FAILURE,
  GET_AIRLINES_STARTED,
  DELETE_TODO,
} from '../actions/types';


const initState = {
  airlines: []
}

const AirLineReducer = (state=initState,action) => {
  switch (action.type){
    case GET_AIRLINES_STARTED:
      return {
        ...state,
        loading: true
      };
    case GET_AIRLINES_SUCCESS:
      return {
         ...state,
        loading: false,
        error: null,
        airlines: state.airlines.concat(action.payload)

      }
    case GET_AIRLINES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
            
    default: 
      return state
  }
}

export default AirLineReducer