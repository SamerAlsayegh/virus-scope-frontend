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
        ...state
      };
    }
    case constants.LOGIN_SUCCESS: {
      return {
        ...state
      };
    }
    case constants.LOGIN_FAIL: {
      return {
        ...state
      };
    }



    case constants.LOGOUT_REQUEST: {
      return {
        ...state
      };
    }
    case constants.LOGOUT_SUCCESS: {
      return {
        ...state
      };
    }

    case constants.LOGOUT_FAIL: {
      return {
        ...state
      };
    }




    default: {
      return state;
    }
  }
};;
