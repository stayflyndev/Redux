// function with two props >>>> state and action 
// action is an object that has a type 'string and payload(optional)


// similar to this.state
const INITIAL_STATE = {
currentUser: null
}

// state is something the store passes to the reducer when an action fires
/****************************************************/
// How do we return the state based on the action??


const userReducer = (state = INITIAL_STATE, action) => {

    switch(action.type) {
        // case = actiontype
        case 'SET_CURRENT_USER' :
        // something here
        return {
            ...state,
            currentUser: action.payload
        }
        default:
            // otherwise
            return state
    }

}

export default userReducer;