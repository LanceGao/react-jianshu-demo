import React, { Component } from 'react';
import { connect } from 'react-redux';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { actionCreators } from './store';
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
            dispatch(actionCreators.getHomeInfo())
        }
    }
}

export default connect(null, mapDispatch)(Home);