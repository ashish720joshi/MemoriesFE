import { combineReducers } from "redux";
import { userReducer } from './User/UserReducers';
import { postReducer } from './Posts/PostReducers';
export const rootReducer = combineReducers({
    users: userReducer,
    posts: postReducer
});