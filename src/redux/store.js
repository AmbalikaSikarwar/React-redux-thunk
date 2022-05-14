import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import airlineReducer from '../redux/reducers/airlineReducer';
import loginReducer from '../redux/reducers/loginReducer';
import showPost from '../redux/reducers/getpost';
import deletePost from './reducers/deletepost';
import updatePost from "./reducers/updatepost";

const reducer = combineReducers({
    airlines: airlineReducer,
    user: loginReducer,
    post: showPost,
    delete: deletePost,
    update: updatePost,
});
const store = createStore(
  reducer, applyMiddleware(thunk)
)

export default store;