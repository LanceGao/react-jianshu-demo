import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    RecommendWrapper,
    RecommendItem,
    DownloadWrapper,
    DownloadBox,
} from '../style.js';
import downloadPic from '../../../statics/download_pic.png';

class Recommend extends Component {
    render() {
        const { recommendList } = this.props;
        return (
            <RecommendWrapper>
                {
                    recommendList.map(item => {
                        return (
                            <RecommendItem key={item.get('id')}>
                                <img className="recommend-pic" src={item.get('imgUrl')} alt="" />
                            </RecommendItem>
                        )
                    })
                }
                <DownloadWrapper>
                    <img className="download-pic" src={downloadPic} alt="" />
                    <DownloadBox>
                        <p className="title">下载简书手机App &nbsp;&gt;</p>
                        <p className="desc">随时随地发现和创作内容</p>
                    </DownloadBox>
                </DownloadWrapper>
            </RecommendWrapper>
        )
    }
}

const mapState = (state) => ({
    recommendList: state.getIn(['home', 'recommendList'])
})

export default connect(mapState, null)(Recommend);