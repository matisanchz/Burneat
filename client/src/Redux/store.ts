import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import dataReducer from './Reducers/dataReducer'

const rootReducer = combineReducers({
    data : dataReducer
})
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composeEnhancers = compose;

export default function generateStore(){
    const store = createStore(rootReducer,composeEnhancers
    (applyMiddleware(thunk)))
    return store;
}