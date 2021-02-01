import axios from 'axios';
import * as constants from './constants'

const changeHomeData = (result) => ({
    type: constants.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList,
    writerList: result.writerList
})

const addHomeData = (result, articlePage) => ({
    type: constants.ADD_HOME_DATA,
    articleList: result,
    articlePage: articlePage
})

export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then(res => {
            const result = res.data.data;
            dispatch(changeHomeData(result))
        })
    }
}

export const getMoreArticleList = (articlePage) => {
    return (dispatch) => {
        axios.get('/api/moreHomeList.json?page=' + articlePage).then(res => {
            const result = res.data.data;
            dispatch(addHomeData(result, articlePage + 1))
        })
    }
}