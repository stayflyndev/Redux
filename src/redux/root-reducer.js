// BASE REDUCER OBJECT THAT REPRESENTS ALL OF OUR STATE 

import { combineReducers } from 'redux'
import userReducer from './user/user.reducer'


export default combineReducers ({
user: userReducer

});