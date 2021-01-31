import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../../../statics/logo.png';
import {
    TopicWrapper,
    TopicItem,
    MoreTopic,
} from '../style'

class Topic extends Component {
    render() {
        const { topicList } = this.props;
        return (
            <TopicWrapper>
                {topicList.map((item) => (
                    <TopicItem key={item.id} >
                        <img className="topic-pic" src={logo} alt="1" />
                        { item.title }
                    </TopicItem>
                ))}
                <MoreTopic>
                    更多热门话题&nbsp;&nbsp;&gt;
                </MoreTopic>
            </TopicWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        topicList: state.get('home').get('topicList')
    }
}

export default connect(mapStateToProps, null)(Topic);