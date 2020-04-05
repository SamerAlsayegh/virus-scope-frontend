import constants from "./constants"

const initialState = {

  // Hospital Fetch
  hospitals: [],
  fetchingHospitals: false,
  fetchingHospitalsError: null,
};


export default (state = initialState, action) => {
  switch (action.type) {
    case constants.FETCH_HOSPITAL_REQUEST: {
      return {
        ...state,
        fetchingHospitals: true,
        fetchingHospitalsError: null,
      };
    }
    case constants.FETCH_HOSPITAL_SUCCESS: {
      return {
        ...state,
        fetchingHospitals: false,
        hospitals: action.data,
        fetchingHospitalsError: null,
      };
    }
    case constants.FETCH_HOSPITAL_FAIL: {
      return {
        ...state,
        fetchingHospitals: false,
        fetchingHospitalsError: action.error,
      };
    }



    default: {
      return state;
    }
  }
};;
