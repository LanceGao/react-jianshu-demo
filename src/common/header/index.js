import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group'

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
    constructor(props) {
        super(props)
        this.state = {
            focused: false
        }
        this.handleInputFocus = this.handleInputFocus.bind(this)
        this.handleInputBlur = this.handleInputBlur.bind(this)
    }
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
                        <CSSTransition
                        timeout={300}
                        in={this.state.focused}
                        classNames="slide">
                            <NavSearch
                                className={this.state.focused ? 'focused' : ''}
                                onFocus={this.handleInputFocus}
                                onBlur={this.handleInputBlur} />
                        </CSSTransition>
                        <span className={this.state.focused ? 'iconfont focused' : 'iconfont'}>&#xe633;</span>
                        
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
    handleInputFocus() {
        this.setState({
            focused: true
        })
    }
    handleInputBlur() {
        this.setState({
            focused: false
        })
    }
}

export default Header