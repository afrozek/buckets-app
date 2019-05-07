// export default function() {
//   return { version: '2.0' };
// }

export default function(state, action) {
  switch(action.type) {
    case 'VERSION_SELECTED': 
      console.log(action.payload);
      return { version: action.payload };
    default:
      return {
         version: '2.0',
         apiBaseUrl: "localhost"
      };
  }

}