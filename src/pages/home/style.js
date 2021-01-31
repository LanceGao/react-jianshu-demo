import styled from 'styled-components';
import banner from '../../statics/banner.png';

// 首页
export const HomeWrapper = styled.div`
    width: 960px;
    margin: 0 auto;
    overflow: hidden;
`;
export const HomeLeft = styled.div`
    float: left;
    width: 640px;
    margin-left: 15px;
    margin-top: 30px;
    .banner-img {
        width: 625px;
        height: 270px;
        border-radius: 4px;
        background: url(${banner}) left top no-repeat;
        background-size: contain;
    }
`;
export const HomeRight = styled.div`
    float: right;
    width: 280px;
    margin-top: 30px;
`;

// 专题
export const TopicWrapper = styled.div`
    overflow: hidden;
    padding: 20px 0 10px;
    margin-left: -18px;
    border-bottom: 1px solid #dcdcdc;
`;
export const TopicItem = styled.div`
    float: left;
    height: 32px;
    line-height: 32px;
    border: 1px solid #dcdcdc;
    background: #f7f7f7;
    font-size: 14px;
    color: #000;
    padding-right: 6px;
    cursor: pointer;
    border-radius: 3px;
    margin-left: 18px;
    margin-bottom: 18px;
    .topic-pic {
        float: left;
        display: block;
        width: 32px;
        height: 32px;
        margin-right: 6px;
    }
`;
export const MoreTopic = styled.div`
    height: 34px;
    line-height: 34px;
    font-size: 14px;
    color: #666;
    margin-left: 18px;
    float: left;
    cursor: pointer;
`;

// 文章列表
export const ArticleList = styled.div`
    // padding: 20px 0;
`;
export const ArticleItem = styled.div`
    padding: 20px 0;
    overflow: hidden;
    border-bottom: 1px solid #dcdcdc;
    cursor: pointer;
    .pic {
        float: right;
        display: block;
        width: 125px;
        border-radius: 3px;
    }
`;
export const ArticleInfo = styled.div`
    float: left;
    width: 500px;
    .article-title {
        line-height: 27px;
        font-size: 18px;
        font-weight: bold;
        color: #333;
    }
    .article-desc {
        line-height: 24px;
        font-size:13px;
        color: #999;
    }
`;

// 推荐列表
export const RecommendWrapper = styled.div`
    margin-bottom: 30px; 
`;
export const RecommendItem = styled.div`
    margin-bottom: 10px;
    cursor: pointer;
    .recommend-pic {
        display: inline-block;
        width: 278px;
        height: 50px;
    }
`;
export const DownloadWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 234px;
    height: 60px;
    border: 1px solid #dcdcdc;
    border-radius: 3px;
    padding: 10px 22px;
    .download-pic {
        width: 60px;
        height: 60px;
        margin-right: 12px;
    }
`;
export const DownloadBox = styled.div`
    line-height: 21px;
    cursor: pointer;
    .title {
        font-size: 15px;
        color: #333;
    }
    .desc {
        font-size: 13px;
        color: #777;
    }
`;

// 推荐作者列表
export const WriterWrapper = styled.div`
    width: 280px;
    margin-bottom: 20px;
    .more-writer {
        width: 100%;
        line-height: 18px;
        padding: 7px 0;
        background: #f7f7f7;
        color: #787878;
        font-size: 13px;
        border: 1px solid #dcdcdc;
        border-radius: 3px;
        outline: none;
        margin-top: 20px;
        cursor: pointer;
    }
`;
export const WriterTitle = styled.div`
    display: flex;
    justify-content: space-between;
    height: 22px;
    line-height: 22px;
    .title-text {
        font-size: 14px;
        color: #969696;
    }
    .switch-title {
        font-size: 14px;
        color: #969696;
        cursor: pointer;
    }
    .spin-icon {
        font-size: 15px;
        margin-right: 3px;
        color: #969696;
        font-weight: bold;
    }
`;
export const WriterList = styled.div`
    width: 100%;
`;
export const WriterItem = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    .watch-writer {
        font-size: 13px;
        color: #42c02e;
        line-height: 20px;
        cursor: pointer;
        margin-top: 4px;
    }
`;
export const WriterInfo = styled.div`
    display: flex;
    align-items: center;
    .writer-headimg {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        margin-right: 10px;
    }
    .writer-info-wrapper {
        cursor: pointer;
        .writer-name {
            font-size: 14px;
            color: #333;
            line-height: 20px;
        }
        .writer-desc {
            font-size: 12px;
            color: #969696;
            line-height: 18px;
        }
    }
`;