import {createStore, compose, applyMiddleware} from 'redux';
import {rootReducer} from './Reducer';
import thunk from 'redux-thunk';


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose


export const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)) )