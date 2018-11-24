import React, { Component } from 'react';

import { KeystoneOutline, DFOutline } from '../assets/customSVGs';
import { MainContainer, InnerContainer, HorizontalMargin, VerticalMargin } from '../components/misc/containers';
import { HeaderText } from '../components/misc/text';

import { mainContainers } from '../styles/misc/containerStyles';
import globalStyle, { homeHeader } from '../styles/globalStyle';

import '../styles/pages/homeStyle.css';

export default class Home extends Component {
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
        <div className="Home">
          <header style={{...homeHeader}}>
          
            <HorizontalMargin style={{gridArea: '1 / 1 / 1 / 4', ...mainContainers.horizontal}}/>
            
            <VerticalMargin style={{gridArea: '2 / 1 / 2 / 1', ...mainContainers.vertical}}>
              <DFOutline                
                onClick={() => this.setState({ selection: 'unselected' })}
                extendMouseOver={() => this.setState({ selection: 'partUnselected' })}
                extendMouseLeave={() => this.setState({ selection: 'neutral' })}
              />
            </VerticalMargin>

            <MainContainer style={{gridArea: '2 / 2 / 2 / 2', backgroundColor: globalStyle.colors.portfolioGray}}>
              <HeaderText style={{ position: 'absolute', left: '35%', top: '38%' }}>
                WELCOME
              </HeaderText>
              <InnerContainer backgroundColor={globalStyle.colors.keystoneBlack} pose={this.state.selection}/>
            </MainContainer>

            <VerticalMargin style={{gridArea: '2 / 3 / 2 / 3', ...mainContainers.vertical}}>
              <KeystoneOutline 
                  onClick={() => this.setState({ selection: 'selected' })}
                  extendMouseOver={() => this.setState({ selection: 'partSelected' })}
                  extendMouseLeave={() => this.setState({ selection: 'neutral' })}
              />
            </VerticalMargin>

            <HorizontalMargin style={{gridArea: '3 / 1 / 3 / 4', ...mainContainers.horizontal}}/>
          </header>
        </div>
      );
    }
  }