import React, { PureComponent } from 'react';
import { actionCreators } from './store';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {
    LoginWrapper,
    LoginBox,
    Input,
    Button,
} from './style.js';

class Login extends PureComponent {
    render() {
        const { loginStatus } = this.props;
        console.log('status', loginStatus)
        if (loginStatus) {
            return <Redirect to="/" />
        } else {
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder="手机号" ref={(input) => {this.account = input}}/>
                        <Input placeholder="密码" type="password" ref={(input) => {this.password = input}}/>
                        <Button onClick={() => this.props.login(this.account, this.password)}>登录</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        }
    }
}

const mapState = (state) => ({
    loginStatus: state.getIn(['login', 'loginStatus'])
})

const mapDispatch = (dispatch) => ({
    login(account, password) {
        dispatch(actionCreators.login(account.value, password.value))
    }
})

export default connect(mapState, mapDispatch)(Login)