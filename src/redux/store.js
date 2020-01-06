import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import rootReducer from './root-reducer'

// setup middlewares which is an array 
const middlewares = [logger];

// create the store 
const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store;