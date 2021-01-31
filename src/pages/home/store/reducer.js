import { fromJS } from 'immutable';

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    writerList: []
})

export const reducer = (state = defaultState, action) => {
    console.log('changedata', action)
    switch(action.type) {
        case 'change_home_data':
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