/* eslint no-console: 0 */
/* eslint no-unused-vars: 0 */

//  This adds fetch as a global so that its API is consistent between client and server.
import 'isomorphic-fetch';

//  Action key that carries API call info interpreted by this Redux middleware
export const CALL_API = Symbol('Call API');


function callApi(url) {
  return fetch(url).then(
    response => response.json().then(json => ({ json, response }))
  ).then(
    ({ json, response }) => {
// response.ok - Boolean for successful response (status in the range 200-299 is true else false)
      if (!response.ok) {
        return Promise.reject(json);
      }
      return json;
    });
}

export default store => next => action => {
  const currentAction = action[CALL_API];
  if (typeof currentAction === 'undefined') {
    return next(action);
  }

  const { url, types } = currentAction;

  if (typeof url !== 'string') {
    throw new Error('Specify a string URL.');
  }

  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three action types.');
  }
  if (!types.every(type => typeof type === 'string')) {
    throw new Error('Expected action types to be strings.');
  }


  // set new action data which is used in next()
  function reduceAction(data) {
    const finalAction = Object.assign({}, action, data);
    delete finalAction[CALL_API];
    return finalAction;
  }

  const [actionPendingType, actionSuccessType, actionFailureType] = types;
  next(reduceAction({ type: actionPendingType }));

  return callApi(url).then(
    response => next(reduceAction({ response, type: actionSuccessType }))
  ).catch((error) => {
    console.error('CLIENT MIDDLEWARE ERROR:', error);
    next(reduceAction(
      {
        type: actionFailureType,
        error: error.message || 'Something bad happened',
      }
    ));
  });
};
