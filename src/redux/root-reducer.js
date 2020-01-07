// BASE REDUCER OBJECT THAT REPRESENTS ALL OF OUR STATE 

import { combineReducers } from 'redux'
import userReducer from './user/user.reducer'
import cartReducr from './cart/cart.reducer'


export default combineReducers ({
user: userReducer,
cart: cartReducr

});