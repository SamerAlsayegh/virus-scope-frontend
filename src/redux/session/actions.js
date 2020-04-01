import constants from "./constants"
import RequestService from "../../services/Request";

export const login = ({email, password}) => (dispatch) => {
    dispatch({type: constants.LOGIN_REQUEST});
    return new Promise((resolve, reject)=>{
        RequestService.post('auth/login', {email, password}).then(() => {
            dispatch({type: constants.LOGIN_SUCCESS});
            resolve();
        }, (err) => {
            dispatch({type: constants.LOGIN_FAIL, error: err});
            reject(err);
        })
    });

};

export const logout = () => (dispatch) => {
    dispatch({type: constants.LOGOUT_REQUEST});
    return new Promise((resolve, reject)=>{
        RequestService.post('auth/logout').then(() => {
            dispatch({type: constants.LOGOUT_SUCCESS});
            resolve();
        }, (err) => {
            dispatch({type: constants.LOGOUT_FAIL, error: err});
            reject(err);
        })
    });
};