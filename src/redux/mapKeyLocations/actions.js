import constants from "./constants"
import RequestService from "../../services/Request";

export const uploadCheckData = (files) => (dispatch) => {
    dispatch({type: constants.CHECK_KEY_LOCATIONS_REQUEST})

    Promise.all(files.map(file => {
        return RequestService.post('location/check', {
            file
        });
    })).then(res => {
        let fullArray = [];

        res.forEach((res => {
            fullArray = fullArray.concat(res.data)
        }));
        dispatch({type: constants.CHECK_KEY_LOCATIONS_SUCCESS, data: fullArray});
    }, (err) => {
        dispatch({type: constants.CHECK_KEY_LOCATIONS_FAIL, error: err});
    });
};


export const uploadPatientData = (name, files) => (dispatch) => {
    dispatch({type: constants.UPLOAD_KEY_LOCATIONS_REQUEST})

    Promise.all(files.map(file => {
        return RequestService.post('location/add', {
            name,
            file
        });
    })).then(res => {
        let fullArray = [];

        res.forEach((res => {
            fullArray = fullArray.concat(res.data)
        }));
        dispatch({type: constants.UPLOAD_KEY_LOCATIONS_SUCCESS});
    }, (err) => {
        dispatch({type: constants.UPLOAD_KEY_LOCATIONS_FAIL, error: err});
    });
};
