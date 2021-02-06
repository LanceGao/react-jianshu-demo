import React, { Component } from 'react';
import Header from './common/header';
import { GlobalStyle } from './style.js';
import { IconfontStyle } from './statics/iconfont/iconfont';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/home';
import Detail from './pages/detail';

class App extends Component {
    render() {
        return (
            <div>
                <GlobalStyle />
                <IconfontStyle />
                <BrowserRouter>
                    <Header />
                    <Route path="/login" exact component={Login}/>
                    <Route path='/' exact component={Home}></Route>
                    <Route path='/detail/:id' exact component={Detail}></Route>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;