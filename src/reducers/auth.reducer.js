// export default function() {
//   return { version: '2.0' };
// }

const INITIAL_STATE = {
  isLoggedIn: null
}

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'LOG_IN': 
      return {...state, isLoggedIn: true}
    case 'LOG_OUT': 
      return {...state, isLoggedIn: false}
    default:
      return state;
  }

}