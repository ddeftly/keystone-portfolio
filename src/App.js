import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import { KeystoneOutline, DFOutline } from './assets/customSVGs';
import { MainContainer, InnerContainer, HorizontalMargin, VerticalMargin } from './components/misc/containers';

import { mainContainers } from './styles/misc/containerStyles';
import globalStyle, { appHeader } from './styles/globalStyle';

class App extends Component {
  state = {
    selection: 'neutral'
  }

  switchContainer = () => {
    if (this.state.selection === 'neutral') {
      this.setState({ selection: 'selected' })
    } else {
      this.setState({ selection: 'neutral' })
    }
  }

  render() {
    return (
      <div className="App">
        <header style={{...appHeader}}>
          <HorizontalMargin style={{gridArea: '1 / 1 / 1 / 4', ...mainContainers.horizontal}}/>
          <VerticalMargin style={{gridArea: '2 / 1 / 2 / 1', ...mainContainers.vertical}}>
          <DFOutline                
            onClick={() => this.setState({ selection: 'unselected' })}
          />
          </VerticalMargin>
          <MainContainer style={{gridArea: '2 / 2 / 2 / 2', backgroundColor: globalStyle.colors.portfolioGray}}>
            <InnerContainer backgroundColor={globalStyle.colors.keystoneBlack} pose={this.state.selection}/>
          </MainContainer>
          <VerticalMargin style={{gridArea: '2 / 3 / 2 / 3', ...mainContainers.vertical}}>
            <KeystoneOutline 
                onClick={() => this.setState({ selection: 'selected' })}
            />
          </VerticalMargin>
          <HorizontalMargin style={{gridArea: '3 / 1 / 3 / 4', ...mainContainers.horizontal}}/>
        </header>
      </div>
    );
  }
}

export default App;
