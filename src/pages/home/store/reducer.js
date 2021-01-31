import { fromJS } from 'immutable';
import * as constant from './constants'

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    writerList: []
})

export const reducer = (state = defaultState, action) => {
    switch(action.type) {
        case constant.CHANGE_HOME_DATA:
            return state.merge({
                topicList: action.topicList,
                articleList: action.articleList,
                recommendList: action.recommendList,
                writerList: action.writerList
            })
        default:
            return state
    }
}