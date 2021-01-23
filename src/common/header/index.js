import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
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

 const Header = (props) => {
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
                    in={props.focused}
                    classNames="slide">
                        <NavSearch
                            className={props.focused ? 'focused' : ''}
                            onFocus={props.handleInputFocus}
                            onBlur={props.handleInputBlur} />
                    </CSSTransition>
                    <span className={props.focused ? 'iconfont focused' : 'iconfont'}>&#xe633;</span>
                    
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

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused'])
        // focused: state.get('header').get('focused')
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            dispatch(actionCreators.searchFocus())
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)