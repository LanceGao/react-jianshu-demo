import styled from 'styled-components'
import LogoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
    position: relative;
    height: 56px;
    width: 100%;
    background: #fff;
    border-bottom: 1px solid #f0f0f0;
`;
export const Logo = styled.a.attrs({
    href: '/'
})`
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
    .iconfont {
        position: absolute;
        right: 5px;
        bottom: 5px;
        width: 28px;
        line-height: 28px;
        border-radius: 14px;
        text-align: center;
        // background: red;
    }
;`
export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 160px;
    height: 38px;
    padding: 0 20px;
    border-radius: 40px;
    border: 1px solid #eee;
    outline: none;
    background: #eee;
    margin-top: 9px;
    font-size: 14px;
    margin-left: 30px;
    box-sizing: border-box;
    &::placeholder {
        color: #999;
    }
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