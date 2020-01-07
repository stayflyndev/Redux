import CartActionTypes from "./cart.types"


const INITIAL_STATE = {
    hidden: true
}

const cartReducr = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'TOGGLE_CART':
        return {
            ...state,
            hidden: !state.hidden
        }
        default:
            return state
    }
}

export default cartReducr