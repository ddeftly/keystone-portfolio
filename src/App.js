import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import { HeaderText } from './components/misc/text';
import { MainContainer, InnerContainer, HorizontalMargin, VerticalMargin } from './components/misc/containers';

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

  componentDidMount() {
    setTimeout(() => this.setState({ selection: 'selected' }), 1000)
  }

  render() {
    return (
      <div className="App">
        <header style={{...appHeader}}>
          <HorizontalMargin style={{gridArea: '1 / 1 / 1 / 4', backgroundColor: 'red'}}/>
          <VerticalMargin style={{gridArea: '2 / 1 / 2 / 1', backgroundColor: 'blue'}}>
          </VerticalMargin>
          <MainContainer style={{gridArea: '2 / 2 / 2 / 2'}}>
            <InnerContainer backgroundColor={globalStyle.colors.keystoneBlack} pose={this.state.selection}/>
          </MainContainer>
          <VerticalMargin style={{gridArea: '2 / 3 / 2 / 3', backgroundColor: 'blue'}}/>
          <HorizontalMargin style={{gridArea: '3 / 1 / 3 / 4', backgroundColor: 'red'}}/>
        </header>
      </div>
    );
  }
}

export default App;
