import constants from "./constants"

const initialState = {

  // Login Actions
  loggedIn: false,
  loggingIn: false,
  logInError: null,



  // Login Actions
  loggingOut: false,
  logOutError: null,
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



    case constants.LOGOUT_REQUEST: {
      return {
        ...initialState
      };
    }
    case constants.LOGOUT_SUCCESS: {
      return {
        ...initialState
      };
    }

    case constants.LOGOUT_FAIL: {
      return {
        ...initialState
      };
    }




    default: {
      return state;
    }
  }
};;
