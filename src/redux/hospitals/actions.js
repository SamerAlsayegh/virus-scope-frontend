import constants from "./constants"
import RequestService from "../../services/Request";
import HospitalService from "../../services/Hospital";

export const getHospitals = (filters) => (dispatch) => {
    dispatch({type: constants.FETCH_HOSPITAL_REQUEST});
    return new Promise((resolve, reject)=>{
        HospitalService.getHospitals(filters).then((hospitals) => {
            dispatch({type: constants.FETCH_HOSPITAL_SUCCESS, data: hospitals});
            resolve();
        }, (err) => {
            dispatch({type: constants.FETCH_HOSPITAL_FAIL, error: err});
            reject(err);
        })
    });
};

export const addHospital = (data) => (dispatch) => {
    dispatch({type: constants.ADD_HOSPITAL_REQUEST});
    return new Promise((resolve, reject)=>{
        HospitalService.addHospital(data).then(() => {
            dispatch({type: constants.ADD_HOSPITAL_SUCCESS});
            dispatch(getHospitals());
            resolve();
        }, (err) => {
            dispatch({type: constants.ADD_HOSPITAL_FAIL, error: err});
            reject(err);
        })
    });
};