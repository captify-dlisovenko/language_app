import {combineReducers, createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk'
import {quotesReducer} from "./reducers/quotesReducer";

const reducers = combineReducers({quotes: quotesReducer});

export const store = createStore(reducers, applyMiddleware(thunk));