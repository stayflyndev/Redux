// functions that return objects 

// returns an obj where the type that has same name as the case(reducer)
export const setCurrentUser = user => ({
type: 'SET_CURRENT_USER',
payload: user
})