import * as actionTypes from "./Types";

export const sigin_in = currentUser => {
  return {
    type: actionTypes.SIGNIN,
    payload: {
      currentUser
    }
  };
};
