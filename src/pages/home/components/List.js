import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    ArticleList,
    ArticleItem,
    ArticleInfo,
} from '../style.js';
import articlePic from '../../../statics/article_pic.jpeg';

class List extends Component {
    render() {
        const { articleList } = this.props;
        return (
            <div>
                <ArticleList>
                    {
                        articleList.map((item) => {
                            return (
                                <ArticleItem key={item.get('id')}>
                                    <ArticleInfo>
                                        <h3 className="article-title">{item.get('title')}</h3>
                                        <p className="article-desc">{item.get('desc')}</p>
                                    </ArticleInfo>
                                    {/* {this.showPic(item)} */}
                                    <img className="pic" src={item.get('imgUrl') ? item.get('imgUrl') : articlePic} alt="" />
                                </ArticleItem>
                            )
                        })
                    }
                    
                </ArticleList>
            </div>
        )
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
    return {
        articleList: state.getIn(['home', 'articleList'])
    }
}

export default connect(mapState, null)(List);