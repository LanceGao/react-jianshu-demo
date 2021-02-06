import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { actionCreators as loginActionCreators } from '../../pages/login/store';
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
        const {focused, list, handleInputFocus, handleInputBlur, loginStatus} = this.props
        return (
            <HeaderWrapper>
                <Link to="/">
                    <Logo />
                </Link>
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载app</NavItem>
                    {
                        loginStatus ? <NavItem className="right" onClick={this.props.logOut}>退出</NavItem> : <Link to="/login"><NavItem className="right">登录</NavItem></Link>
                    }
                    
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
                                onFocus={() => handleInputFocus(list)}
                                onBlur={handleInputBlur} />
                        </CSSTransition>
                        <span className={focused ? 'iconfont focused search-icon' : 'iconfont search-icon'}>&#xe633;</span>
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
        const newList = list.toJS(); // 将immutable对象转换为普通对象
        const pageList = [];
        for (let i = (page - 1) * 5; i < page * 5; i++) {
            if (newList[i]) {
                pageList.push(<SearchListItem key={newList[i]}>{newList[i]}</SearchListItem>)
            }
        }
        if (focused || mouseIn) {
            return (
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    <SearchTitle>
                        热门搜索
                        <SearchTitleSwitch onClick={() => {handleChangeList(page, totalPage, this.spinIcon)}}>
                            <span ref={(icon) => {this.spinIcon = icon}} className="iconfont spin-icon">&#xe685;</span>
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
        loginStatus: state.getIn(['login', 'loginStatus'])
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            (list.size === 0) && dispatch(actionCreators.getHistoryList())
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
        handleChangeList(page, totalPage, spin) {
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
            if (originAngle) {
                originAngle = parseInt(originAngle);
            } else {
                originAngle = 0;
            }
            console.log('deg', originAngle)
            spin.style.transform = `rotate(${originAngle+180}deg)`
            if (page < totalPage) {
                dispatch(actionCreators.changeHistoryList(page + 1))
            } else {
                dispatch(actionCreators.changeHistoryList(1))
            }
        },
        logOut() {
            dispatch(loginActionCreators.logOut())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)