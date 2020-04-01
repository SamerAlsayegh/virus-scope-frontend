import constants from "./constants"
import RequestService from "../../services/Request";

export const login = ({email, password}) => (dispatch) => {
    dispatch({type: constants.LOGIN_REQUEST});
    RequestService.post('auth/login', {email, password}).then(() => {
        dispatch({type: constants.LOGIN_SUCCESS});
    }, (err) => {
        dispatch({type: constants.LOGIN_FAIL, error: err});
    })
};
