import * as constants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';

export const searchFocus = () => ({
    type: constants.SEARCH_FOCUS
})
export const searchBlur = () => ({
    type: constants.SEARCH_BLUR
})
const changeList = (data) => ({
    type: constants.CHANGE_LIST,
    data: fromJS(data)
})
export const getHistoryList = () => {
    return (dispatch) => {
        axios.get('/api/historylist.json').then(res => {
            const data = res.data.data
            dispatch(changeList(data))
        }).catch(err => {
            console.log('err', err)
        })
    }
}