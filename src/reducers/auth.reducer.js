// export default function() {
//   return { version: '2.0' };
// }

const INITIAL_STATE = {
  isLoggedIn: null,
  userId: null
}

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'LOG_IN': 
      return {...state, isLoggedIn: true, userId: action.payload}
    case 'LOG_OUT': 
      return {...state, isLoggedIn: false, userId: null}
    default:
      return state;
  }

}