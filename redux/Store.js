import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import apiReducer from './ApiReducer';
import detailsReducer from './DetailsReducer';

const appReducers = combineReducers({
    apiReducer,
    detailsReducer,
});

const rootReducer= (state,action)=> appReducers(state,action);

const logger = createLogger();

export const store = createStore(rootReducer,applyMiddleware(thunk,logger));