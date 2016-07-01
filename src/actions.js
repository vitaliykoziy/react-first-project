const constants = require('./constants');

module.exports = {
  increment: () => {
    return (dispatch) => {
      return dispatch({
        type: constants.DECREMENT,
      });
    };
  }
  // decrement: {type: constants.DECREMENT},
};

// export function increment() {
//   return (dispatch) => {
//     return dispatch({
//       type: constants.DECREMENT,
//     });
//   };
// }