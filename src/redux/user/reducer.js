import constants from "./constants"

const initialState = {

  // Login Actions
  fetchingUser: true,
  fetchingUserError: null,
  user: null,



  // Login Actions
  updatingUser: false,
  updatingUserError: null,
};


export default (state = initialState, action) => {
  switch (action.type) {
    case constants.USER_GET_REQUEST: {
      return {
        ...state,
        fetchingUser: true,
        fetchingUserError: null,
        user: null,
      };
    }
    case constants.USER_GET_SUCCESS: {
      return {
        ...state,
        fetchingUser: false,
        fetchingUserError: null,
        user: action.data,
      };
    }
    case constants.USER_GET_FAIL: {
      return {
        ...state,
        fetchingUser: false,
        fetchingUserError: action.error,
        user: null,
      };
    }



    case constants.USER_UPDATE_REQUEST: {
      return {
        ...state,
        updatingUser: true,
        updatingUserError: null
      };
    }
    case constants.USER_UPDATE_SUCCESS: {
      return {
        ...state,
        // user: action.data,
        updatingUser: false,
        updatingUserError: null
      };
    }

    case constants.USER_UPDATE_FAIL: {
      return {
        ...state,
        updatingUser: false,
        updatingUserError: action.error
      };
    }

    case 'LOGOUT_SUCCESS': {
      return {
        ...initialState,
        fetchingUser: false
      };
    }

    default: {
      return state;
    }
  }
};;
