import styled from 'styled-components'
import LogoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
    position: relative;
    height: 56px;
    width: 100%;
    background: #fff;
    border-bottom: 1px solid #f0f0f0;
`;
export const Logo = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100px;
    height: 56px;
    background: url(${LogoPic});
    background-size: contain;
`;
export const Nav = styled.div`
    height: 100%;
    width: 960px;
    padding-right: 70px;
    box-sizing: border-box;
    background: #fff;
    margin: 0 auto;
`;
export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    color: #333;
    cursor: pointer;
    font-size: 17px;
    &.left {
        float: left;
    }
    &.right {
        float: right;
        color: #969696;
    }
    &.active {
        color: #ea6f5a;
    }
`;
export const NavSearchWrapper = styled.div`
    float: left;
    position: relative;
    .search-icon {
        position: absolute;
        right: 5px;
        bottom: 5px;
        width: 28px;
        line-height: 28px;
        border-radius: 14px;
        text-align: center;
        &.focused {
            background: #777;
            color: #fff;
        }
    }
;`
export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 160px;
    height: 38px;
    padding: 0 35px 0 20px;
    border-radius: 40px;
    border: 1px solid #eee;
    outline: none;
    background: #eee;
    margin-top: 9px;
    font-size: 14px;
    margin-left: 30px;
    box-sizing: border-box;
    color: #666;
    &::placeholder {
        color: #999;
    }
    &.focused {
        width: 240px;
    }
    &.slide-enter {
        transition: all .3s ease-out;
    }
    &.slide-enter-active {
        width: 240px;
    }
    &.slide-exit {
        transition: all .3s ease-out;
    }
    &.slide-exit-active {
        width: 160px;
    }
`;
export const SearchInfo = styled.div`
    position: absolute;
    left: 30px;
    top: 56px;
    width: 240px;
    box-sizing: border-box;
    padding: 5px 15px;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    z-index: 9;
    // &:before {
    //     position: absolute;
    //     content: '';
    //     width: 10px;
    //     height: 10px;
    //     left: 20px;
    //     top: -4px;
    //     background-color: #fff;
    //     box-shadow: 0 0 8px rgba(0,0,0,.2);
    //     transform: rotate(45deg);
    //     z-index: 1;
    // }
`;
export const SearchTitle = styled.div`
    height: 20px;
    line-height: 20px;
    font-size: 14px;
    color: #787878;
    margin-top: 10px;
`;
export const SearchTitleSwitch = styled.span`
    float: right;
    line-height: 20px;
    font-size: 13px;
    color: #969696;
    cursor: pointer;
    .spin-icon {
        display: inline-block;
        font-size: 15px;
        font-weight: bold;
        margin-right: 3px;
        transition: all .2s ease-in;
        transform-origin: center center;
    }
`;
export const SearchList = styled.ul`
    margin-top: 12px;
    overflow: hidden;
`;
export const SearchListItem = styled.a`
    float: left;
    padding: 5px 10px;
    margin-right: 8px;
    margin-bottom: 15px;
    color: #787878;
    font-size: 14px;
    border-radius: 3px;
    border: 1px solid #ddd;
    cursor: pointer;

`;
export const Adition = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    height: 56px;
`;
export const Button = styled.div`
    float: right;
    height: 38px;
    line-height: 38px;
    padding: 0 20px;
    border: 1px solid #ea6f5a;
    border-radius: 19px;
    margin-top: 9px;
    margin-right: 20px;
    font-size: 14px;
    &.reg {
        color: #ea6f5a;
    }
    &.writting {
        color: #fff;
        background: #ea6f5a;
    }
`;