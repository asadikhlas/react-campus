import * as actionTypes from "./Types";

export const loginError = data => {
  return {
    type: actionTypes.LOGIN_ERROR,
    payload: {
      data
    }
  };
};

export const loginSuccess = currentUser => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    payload: {
      currentUser
    }
  };
};
