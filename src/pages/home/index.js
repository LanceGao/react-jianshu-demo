import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import banner from '../../statics/banner.png';
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
} from './style'

class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner-img" src={banner} alt="2" />
                    <Topic></Topic>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    <Recommend></Recommend>
                    <Writer></Writer>
                </HomeRight>
            </HomeWrapper>
        )
    }
    componentDidMount() {
        this.props.getHomeInfo()
    }
}

const mapDispatch = (dispatch) => {
    return {
        getHomeInfo() {
            axios.get('/api/home.json').then(res => {
                console.log('list', res)
                const result = res.data.data;
                const action = {
                    type: 'change_home_data',
                    topicList: result.topicList,
                    articleList: result.articleList,
                    recommendList: result.recommendList,
                    writerList: result.writerList
                }
                dispatch(action)
            })
        }
    }
}

export default connect(null, mapDispatch)(Home);