import React, { PureComponent } from 'react';
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
    BackTop,
} from './style';

const backTop = () => {
    document.documentElement.scrollTo(0, 0);
}

class Home extends PureComponent {
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
                {this.props.showBackTopBtn ? <BackTop onClick={this.props.backTop}>返回顶部</BackTop> : ''}
            </HomeWrapper>
        )
    }
    componentDidMount() {
        this.props.getHomeInfo()
        this.bindEvents()
    }
    bindEvents() {
        window.addEventListener('scroll', () => {
            console.log('scroll', document.documentElement.scrollTop)
            if (document.documentElement.scrollTop > 200) {
                this.props.showBackTop(true)
            } else {
                this.props.showBackTop(false)
            }
        })
    }
}

const mapState = (state) => ({
    showBackTopBtn: state.getIn(['home', 'showBackTopBtn'])
})

const mapDispatch = (dispatch) => {
    return {
        getHomeInfo() {
            dispatch(actionCreators.getHomeInfo())
        },
        backTop() {
            backTop(dispatch)
        },
        showBackTop(show) {
            dispatch(actionCreators.showBackTop(show))
        }
    }
}

export default connect(mapState, mapDispatch)(Home);