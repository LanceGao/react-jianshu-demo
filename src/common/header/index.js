import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { 
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearchWrapper,
    NavSearch,
    SearchInfo,
    SearchTitle,
    SearchTitleSwitch,
    SearchList,
    SearchListItem,
    Adition,
    Button,
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
                        <CSSTransition
                        timeout={300}
                        in={this.props.focused}
                        classNames="slide">
                            <NavSearch
                                className={this.props.focused ? 'focused' : ''}
                                onFocus={this.props.handleInputFocus}
                                onBlur={this.props.handleInputBlur} />
                        </CSSTransition>
                        <span className={this.props.focused ? 'iconfont focused' : 'iconfont'}>&#xe633;</span>
                        {this.getSearchList(this.props.focused)}
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
    getSearchList() {
        if (this.props.focused) {
            return (
                <SearchInfo>
                    <SearchTitle>
                        热门搜索
                        <SearchTitleSwitch>
                            换一批
                        </SearchTitleSwitch>
                    </SearchTitle>
                    <SearchList>
                        {
                            this.props.list.map(item => {
                                return (
                                    <SearchListItem key={item}>{item}</SearchListItem>
                                )
                            })
                        }
                    </SearchList>
                </SearchInfo>
            )
        } else {
            return null;
        }
    }
 }

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        // focused: state.get('header').get('focused')
        list: state.getIn(['header', 'list'])
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            dispatch(actionCreators.getHistoryList())
            dispatch(actionCreators.searchFocus())
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)