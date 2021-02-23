import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { 
    DetailWrapper,
    DetailTitle,
} from './style.js';
import articleDetailPic from '../../statics/article_detaill_pic.webp';
import { actionCreators } from '../detail/store/index.js';

class Detail extends Component {
    render() {
        return (
            <DetailWrapper>
                <DetailTitle>{this.props.title}</DetailTitle>
                <img src={articleDetailPic} alt="" />
                <div dangerouslySetInnerHTML={{ __html: this.props.contents }} />
            </DetailWrapper>
        )
    }
    componentDidMount() {
        this.props.getArticleDetail(this.props.match.params.id)
    }
}

const mapState = (state) => ({
    title: state.getIn(['detail', 'title']),
    contents: state.getIn(['detail', 'contents'])
})

const mapDispatch = (dispatch) => ({
    getArticleDetail(id) {
        dispatch(actionCreators.getArticleDetail(id))
    }
})

export default connect(mapState, mapDispatch)(withRouter(Detail));