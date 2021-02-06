import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { actionCreators } from '../store';
import {
    ArticleList,
    ArticleItem,
    ArticleInfo,
    MoreArticle,
} from '../style.js';
import articlePic from '../../../statics/article_pic.jpeg';

class List extends PureComponent {
    render() {
        const { articleList, articlePage, getMoreArticleList, loginStatus } = this.props;
        if (!loginStatus) {
            return <Redirect to="/login"/>
        } else {
            return (
                <div>
                    <ArticleList>
                        {
                            articleList.map((item) => {
                                return (
                                    <Link key={item.id} to={'/detail/' + item.id}>
                                        <ArticleItem>
                                            <ArticleInfo>
                                                <h3 className="article-title">{item.title}</h3>
                                                <p className="article-desc">{item.desc}</p>
                                            </ArticleInfo>
                                            <img className="pic" src={articlePic} alt="" />
                                        </ArticleItem>
                                    </Link>
                                )
                            })
                        }
                    </ArticleList>
                    <MoreArticle onClick={() => {getMoreArticleList(articlePage)}}>
                        更多文章
                    </MoreArticle>
                </div>
            )
        }
    }
    showPic(item) {
        if (item.get('imgUrl') || articlePic) {
            return <img className="pic" src={item.get('imgUrl') ? item.get('imgUrl') : articlePic} alt="" />
        } else {
            return null;
        }
    }
}

const mapState = (state) => {
    console.log('state', state)
    return {
        articleList: state.getIn(['home', 'articleList']),
        articlePage: state.getIn(['home', 'articlePage']),
        loginStatus: state.getIn(['login', 'loginStatus'])
    }
}
const mapDispatch = (dispatch) => ({
    getMoreArticleList(articlePage) {
        dispatch(actionCreators.getMoreArticleList(articlePage))
    }
})

export default connect(mapState, mapDispatch)(List);