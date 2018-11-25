import React, { Component } from 'react';

import { KeystoneOutline, DFOutline } from '../assets/customSVGs';
import { MainContainer, HeaderContainer, InnerContainer, HorizontalMargin, VerticalMargin } from '../components/misc/containers';
import { HeaderText } from '../components/misc/text';

import { mainContainers } from '../styles/misc/containerStyles';
import globalStyle, { homeHeader } from '../styles/globalStyle';

import '../styles/pages/homeStyle.css';

const textLeft1 = 57;
const textLeft2 = (textLeft1 * .82);
const textLeft3 = (textLeft1 * .9)

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
              <HeaderText 
                pose={this.state.selection}
                style={{ position: 'absolute', left: `${10}%`, top: '45%', }}
                unSelected={{ xPosition: '0%', opacity: 0 }}
                partUnselected={{ xPosition: '10%', opacity: 0 }}
                neutral={{ xPosition: '0%', opacity: 0 }}
                partSelected={{ xPosition: '10%', opacity: 1 }}
                selected={{ xPosition: '100%', opacity: 1.0 }}
              >
                KEYSTONE
              </HeaderText>
              <HeaderText 
                pose={this.state.selection}
                style={{ position: 'absolute', left: `${textLeft2}%`, top: '45%', }}
                unSelected={{ xPosition: '0%', opacity: 0 }}
                partUnselected={{ xPosition: '10%', opacity: 0 }}
                neutral={{ xPosition: '0%', opacity: 1 }}
                partSelected={{ xPosition: '100%', opacity: 0 }}
                selected={{ xPosition: '100%', opacity: 1.0 }}
              >
                COME
              </HeaderText>
              <InnerContainer backgroundColor={globalStyle.colors.keystoneBlack} pose={this.state.selection} >
                <HeaderText 
                  pose={this.state.selection}
                  style={{ position: 'relative', left: `${textLeft1}%`, top: '25%'}}
                  unSelected={{ xPosition: '100%', opacity: 0 }}
                  partUnselected={{ xPosition: '90%', opacity: 0 }}
                  neutral={{ xPosition: '0%', opacity: 1 }}
                  partSelected={{ xPosition: '100%', opacity: 0 }}
                  selected={{ xPosition: '0%', opacity: 1.0 }}
                >
                  WEL
                </HeaderText>
                <HeaderText 
                  pose={this.state.selection}
                  style={{ position: 'relative', left: `${textLeft1}%`, top: '25%' }}
                  unSelected={{ xPosition: '100%', opacity: 0 }}
                  partUnselected={{ xPosition: '100%', opacity: 1 }}
                  neutral={{ xPosition: '0%', opacity: 0 }}
                  partSelected={{ xPosition: '100%', opacity: 0 }}
                  selected={{ xPosition: '0%', opacity: 1.0 }}
                >
                  DAVID
                </HeaderText>
              </InnerContainer>
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