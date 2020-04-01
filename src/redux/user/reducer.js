import constants from "./constants"

const initialState = {

  // Login Actions
  fetchingUser: false,
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
        ...initialState,
        fetchingUser: true,
        fetchingUserError: null,
        user: null,
      };
    }
    case constants.USER_GET_SUCCESS: {
      return {
        ...initialState,
        fetchingUser: false,
        fetchingUserError: null,
        user: action.data,
      };
    }
    case constants.USER_GET_FAIL: {
      return {
        ...initialState,
        fetchingUser: false,
        fetchingUserError: action.error,
        user: null,
      };
    }



    case constants.USER_UPDATE_REQUEST: {
      return {
        ...initialState,
        updatingUser: true,
        updatingUserError: null
      };
    }
    case constants.USER_UPDATE_SUCCESS: {
      return {
        ...initialState,
        // user: action.data,
        updatingUser: false,
        updatingUserError: null
      };
    }

    case constants.USER_UPDATE_FAIL: {
      return {
        ...initialState,
        updatingUser: false,
        updatingUserError: action.error
      };
    }




    default: {
      return state;
    }
  }
};;
