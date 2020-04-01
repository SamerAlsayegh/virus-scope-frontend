import constants from "./constants"

const initialState = {

  // Login Actions
  loggedIn: false,
  loggingIn: false,
  logInError: null,
};


export default (state = initialState, action) => {
  switch (action.type) {
    case constants.LOGIN_REQUEST: {
      return {
        ...initialState
      };
    }
    case constants.LOGIN_SUCCESS: {
      return {
        ...initialState
      };
    }
    case constants.LOGIN_FAIL: {
      return {
        ...initialState
      };
    }


    default: {
      return state;
    }
  }
};;
