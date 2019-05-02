const initialState = {
  currentUser: 'null'
};

export const SignIn = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN-IN":
      return {
        ...state,
        currentUser: action.payload.currentUser
      };
    default:
      return state;
  }
};
