import { fromJS } from 'immutable';
import * as constant from './constants'

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    writerList: [],
    articlePage: 1
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
        case constant.ADD_HOME_DATA:
            // return state.set('articleList', state.get('articleList').concat(action.articleList))
            return state.merge({
                articleList: state.get('articleList').concat(action.articleList),
                articlePage: action.articlePage
            })
        default:
            return state
    }
}