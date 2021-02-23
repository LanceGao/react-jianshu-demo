import axios from 'axios';
import * as constants from './constants';

const changeLoginStatus = () => ({
    type: constants.CHANGE_LOGIN_STATUS,
    value: true
})

export const login = (account, password) => {
    return (dispatch) => {
        axios.get('/api/login.json?account=' + account + '&passworld=' + password).then(res => {
            console.log('log', res)
            if (res.data.data) {
                dispatch(changeLoginStatus())
            }
        })
    }
}

export const logOut = () => ({
    type: constants.LOGOUT,
    value: false
})