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
        const {focused, handleInputFocus, handleInputBlur} = this.props
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
                        in={focused}
                        classNames="slide">
                            <NavSearch
                                className={focused ? 'focused' : ''}
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur} />
                        </CSSTransition>
                        <span className={focused ? 'iconfont focused' : 'iconfont'}>&#xe633;</span>
                        {this.getSearchList(focused)}
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
        const {focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangeList} = this.props;
        const newList = list.toJS();
        const pageList = [];
        for (let i = (page - 1) * 5; i < page * 5; i++) {
            if (newList[i]) {
                pageList.push(<SearchListItem key={newList[i]}>{newList[i]}</SearchListItem>)
            }
        }
        console.log('flag', focused, mouseIn)
        if (focused || mouseIn) {
            return (
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    <SearchTitle>
                        热门搜索
                        <SearchTitleSwitch onClick={() => {handleChangeList(page, totalPage)}}>
                            换一批
                        </SearchTitleSwitch>
                    </SearchTitle>
                    <SearchList>
                        {pageList}
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
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        mouseIn: state.getIn(['header', 'mouseIn']),
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
        },
        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter())
        },
        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave())
        },
        handleChangeList(page, totalPage) {
            console.log('llll', page, totalPage)
            if (page < totalPage) {
                dispatch(actionCreators.changeHistoryList(page + 1))
            } else {
                dispatch(actionCreators.changeHistoryList(1))
            }
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)