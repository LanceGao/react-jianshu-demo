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
    width: 240px;
    margin-top: 30px;
`;

// 专题
export const TopicWrapper = styled.div`
    overflow: hidden;
    padding: 20px 0 10px;
    margin-left: -18px;
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