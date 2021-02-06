import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    loginStatus: false,
})

export const reducer = (state = defaultState, action) => {
    switch(action.type) {
        case constants.CHANGE_LOGIN_STATUS:
            return state.set('loginStatus', action.value)
        case constants.LOGOUT:
            return state.set('loginStatus', action.value)
        default:
            return state
    }
};