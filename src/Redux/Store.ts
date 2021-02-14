import { applyMiddleware, createStore } from "redux";
import { rootReducer } from './RootReducer';
import ReduxThunk from 'redux-thunk';

export const store = createStore(rootReducer, applyMiddleware(ReduxThunk));