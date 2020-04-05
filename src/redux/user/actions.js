import constants from "./constants"
import RequestService from "../../services/Request";
import UserService from "../../services/User";

export const getUser = () => (dispatch) => {
    dispatch({type: constants.USER_GET_REQUEST});
    return new Promise((resolve, reject) => {
        UserService.getUser().then((data) => {
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
    UserService.updateUser({name, newPassword, currentPassword, email}).then((data) => {
        dispatch(getUser());
        if (data.email){
            alert('Confirm email change by validating new email')
        }
        dispatch({type: constants.USER_UPDATE_SUCCESS, data});
    }, (err) => {
        dispatch({type: constants.USER_UPDATE_FAIL, error: err});
    })
};