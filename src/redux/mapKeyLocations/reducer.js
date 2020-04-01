import constants from "./constants"

const initialState = {

  // Actions
  mapKeyLocations: [],
  mapKeyLocationsUploading: false,
  mapKeyLocationsUploadingError: null,

};


export default (state = initialState, action) => {
  switch (action.type) {
    case constants.CHECK_KEY_LOCATIONS_REQUEST: {
      return {
        ...initialState,
        mapKeyLocationsUploading: true,
        mapKeyLocationsUploadingError: null,
      };
    }
    case constants.CHECK_KEY_LOCATIONS_SUCCESS: {
      return {
        ...initialState,
        mapKeyLocationsUploading: false,
        mapKeyLocationsUploadingError: null,
        mapKeyLocations: action.data
      };
    }
    case constants.CHECK_KEY_LOCATIONS_FAIL: {
      return {
        ...initialState,
        mapKeyLocationsUploading: false,
        mapKeyLocationsUploadingError: action.error,
      };
    }




    default: {
      return state;
    }
  }
};;
