import * as constants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';

const changeList = (data) => ({
    type: constants.CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 5)
})

export const searchFocus = () => ({
    type: constants.SEARCH_FOCUS
})
export const searchBlur = () => ({
    type: constants.SEARCH_BLUR
})
export const mouseEnter = () => ({
    type: constants.MOUSE_ENTER
})
export const mouseLeave = () => ({
    type: constants.MOUSE_LEAVE
})

export const changeHistoryList = (page) => ({
    type: constants.CHANGE_HISTORY_LIST,
    page
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