import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import { HeaderText } from './components/misc/text';
import { MainContainer, InnerContainer } from './components/misc/containers';

import globalStyle, { appHeader } from './styles/globalStyle';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header style={{...appHeader}}>
          <div style={{width: '100%', height: '5vh'}}></div>
          <MainContainer>
            <HeaderText style={{position: 'absolute', top: '50%', left: '50%'}}>
              Hello
            </HeaderText>
            <InnerContainer backgroundColor={globalStyle.colors.keystoneBlack}/>
            <InnerContainer backgroundColor={globalStyle.colors.portfolioGray}/>
          </MainContainer>
        </header>
      </div>
    );
  }
}

export default App;
