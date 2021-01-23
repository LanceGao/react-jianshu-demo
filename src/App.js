import React, { Component } from 'react';
import Header from './common/header';
import { GlobalStyle } from './style.js';
import { IconfontStyle } from './statics/iconfont/iconfont';

class App extends Component {
    render() {
        return (
            <div>
                <GlobalStyle />
                <IconfontStyle />
                <Header />
            </div>
        )
    }
}

export default App;