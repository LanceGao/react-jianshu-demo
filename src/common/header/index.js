import React, { Component } from 'react';

import { 
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Adition,
    Button,
    NavSearchWrapper,
 } from './style'

class Header extends Component {
    render() {
        return (
            <HeaderWrapper>
                <Logo />
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载app</NavItem>
                    <NavItem className="right">登录</NavItem>
                    <NavItem className="right">
                        <span className="iconfont">&#xe636;</span>
                    </NavItem>
                    <NavSearchWrapper>
                        <NavSearch></NavSearch>
                        <span className="iconfont">&#xe633;</span>
                    </NavSearchWrapper>
                </Nav>
                <Adition>
                    <Button className="writting">
                        <span className="iconfont">&#xe611;</span>
                        写文章</Button>
                    <Button className="reg">注册</Button>
                </Adition>
            </HeaderWrapper>
        )
    }
}

export default Header