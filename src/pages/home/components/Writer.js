import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    WriterWrapper,
    WriterTitle,
    WriterList,
    WriterItem,
    WriterInfo,
} from '../style.js';
import headImage from '../../../statics/writer_headimg4.webp';

class Writer extends Component {
    render() {
        const { writerList } = this.props;
        return (
            <WriterWrapper>
                <WriterTitle>
                    <p className="title-text">推荐作者</p>
                    <p className="switch-title">
                    <span className="iconfont spin-icon">&#xe685;</span>
                        换一批
                    </p>
                </WriterTitle>
                <WriterList>
                    {
                        writerList.map(item => {
                            return (
                                <WriterItem key={item.id}>
                                    <WriterInfo>
                                        <img className="writer-headimg" src={headImage} alt="" />
                                        <div className="writer-info-wrapper">
                                            <p className="writer-name">{item.name}</p>
                                            <div className="writer-desc">
                                                <span className="writting-num">写来{item.writtingNum}字</span>
                                                <span className="like-num"> {item.likeNum}喜欢</span>
                                            </div>
                                        </div>
                                    </WriterInfo>
                                    <p className="watch-writer">+ 关注</p>
                                </WriterItem>
                            )
                        })
                    }
                </WriterList>
                <button className="more-writer">查看全部 &gt;</button>
            </WriterWrapper>
        )
    }
}

const mapState = (state) => {
    return {
        writerList: state.getIn(['home', 'writerList'])
    }
}

export default connect(mapState, null)(Writer)