import constants from "./constants"
import RequestService from "../../services/Request";
import PatientService from "../../services/Patient";

export const getPatients = (filters) => (dispatch) => {
    dispatch({type: constants.FETCH_PATIENT_REQUEST});
    return new Promise((resolve, reject)=>{
        PatientService.getPatients(filters).then((patients) => {
            dispatch({type: constants.FETCH_PATIENT_SUCCESS, data: patients});
            resolve();
        }, (err) => {
            dispatch({type: constants.FETCH_PATIENT_FAIL, error: err});
            reject(err);
        })
    });
};

export const addPatient = (data) => (dispatch) => {
    dispatch({type: constants.ADD_PATIENT_REQUEST});
    return new Promise((resolve, reject)=>{
        PatientService.addPatient(data).then(() => {
            dispatch({type: constants.ADD_PATIENT_SUCCESS});
            dispatch(getPatients());
            resolve();
        }, (err) => {
            dispatch({type: constants.ADD_PATIENT_FAIL, error: err});
            reject(err);
        })
    });
};