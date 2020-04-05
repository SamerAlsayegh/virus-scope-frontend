import constants from "./constants"

const initialState = {

  // Patient Fetch
  patients: [],
  fetchingPatients: false,
  fetchingPatientsError: null,
};


export default (state = initialState, action) => {
  switch (action.type) {
    case constants.FETCH_PATIENT_REQUEST: {
      return {
        ...state,
        fetchingPatients: true,
        fetchingPatientsError: null,
      };
    }
    case constants.FETCH_PATIENT_SUCCESS: {
      return {
        ...state,
        fetchingPatients: false,
        patients: action.data,
        fetchingPatientsError: null,
      };
    }
    case constants.FETCH_PATIENT_FAIL: {
      return {
        ...state,
        fetchingPatients: false,
        fetchingPatientsError: action.error,
      };
    }



    default: {
      return state;
    }
  }
};;
