import constants from "./constants"
import RequestService from "../../services/Request";

export const getUser = () => (dispatch) => {
    dispatch({type: constants.USER_GET_REQUEST});
    return new Promise((resolve, reject) => {
        RequestService.get('user').then((data) => {
            dispatch({type: constants.USER_GET_SUCCESS, data});
            resolve(data);
        }, (err) => {
            dispatch({type: constants.USER_GET_FAIL, error: err});
            reject(err);
        })
    })
};




export const updateUser = ({name, newPassword, currentPassword, email}) => (dispatch) => {
    dispatch({type: constants.USER_UPDATE_REQUEST});
    RequestService.post('user', {name, newPassword, currentPassword, email}).then((data) => {
        dispatch({type: constants.USER_UPDATE_SUCCESS, data});
    }, (err) => {
        dispatch({type: constants.USER_UPDATE_FAIL, error: err});
    })
};