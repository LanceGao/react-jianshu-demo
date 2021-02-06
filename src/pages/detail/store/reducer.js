import { fromJS } from 'immutable';
import * as constants from './constants'

const defaultState = fromJS({
    title: '',
    contents: ''
})

export const reducer = (state = defaultState, action) => {
    switch(action.type) {
        case constants.CHANGE_ARTICLE_DETAIL:
            return state.merge({
                title: action.title,
                contents: action.contents
            })
        default:
            return state
    }
}