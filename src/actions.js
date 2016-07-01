const constants = require('./constants');

module.exports = {
  increment: dispatch => dispatch({ type: constants.INCREMENT }),
  // decrement: {type: constants.DECREMENT},
};


// export function increment () {
//   return (dispatch) => {
//     return dispatch({
//       type: constants.DECREMENT,
//     });
//   };
// }
