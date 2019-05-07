// export default function() {
//   return { version: '2.0' };
// }

export default function(state, action) {
  switch(action.type) {
    case 'LOGGED_IN': 
      console.log(action.payload);
      return { loggedIn: action.payload };
    default:
      return { loggedIn: "false" };
  }

}