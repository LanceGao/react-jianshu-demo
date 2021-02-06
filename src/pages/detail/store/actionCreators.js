import axios from 'axios';
import * as constants from './constants';

const changeArticleDetail = (title, contents) => ({
    type: constants.CHANGE_ARTICLE_DETAIL,
    title,
    contents
})

export const getArticleDetail = (id) => {
    return (dispatch) => {
        axios.get('/api/articleDetail.json?id=' + id).then(res => {
            const result = res.data.data
            dispatch(changeArticleDetail(result.title, result.contents))
        })
    }
}