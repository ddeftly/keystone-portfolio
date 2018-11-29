import React, { Component } from 'react';

import { Route, Link } from "react-router-dom";
import { KeystoneOutline, DFOutline } from '../assets/customSVGs';
import { MainContainer, HeaderContainer, HomeInnerContainer, HorizontalMargin, VerticalMargin } from '../components/misc/containers';
import { HeaderText } from '../components/misc/text';

import { mainContainers } from '../styles/misc/containerStyles';
import globalStyle, { homeHeader } from '../styles/globalStyle';

import '../styles/globalCSS.css';

const textLeft1 = 31.5;
const textLeft2 = (textLeft1 * 1.32);

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
          <header style={{...homeHeader}} className='header' id='main'>
          
            <HorizontalMargin id='subname' style={{gridArea: '1 / 2 / 1 / 2', ...mainContainers.horizontal}}>
              <text>DAVID A FIGUEROA</text>
            </HorizontalMargin>
            
            <VerticalMargin style={{gridArea: '2 / 1 / 2 / 1', ...mainContainers.vertical}}>
            <Link to='/portfolio' style={{position: 'relative', left: '.2rem'}}>
              <DFOutline                
                extendMouseOver={() => this.setState({ selection: 'partUnselected' })}
                extendMouseLeave={() => this.setState({ selection: 'neutral' })}
              />
            </Link>
            </VerticalMargin>

            <MainContainer style={{gridArea: '2 / 2 / 2 / 2', backgroundColor: globalStyle.colors.portfolioGray}}> 
              <HeaderText 
                id='submain'
                pose={this.state.selection}
                style={{ position: 'absolute', left: `${40}%`, top: '56%', fontSize: '5em'}}
                unSelected={{ xPosition: '0%', opacity: 0 }}
                partUnselected={{ xPosition: '10%', opacity: 0 }}
                neutral={{ xPosition: '0%', opacity: 0 }}
                partSelected={{ xPosition: '-90%', opacity: 1 }}
                selected={{ xPosition: '100%', opacity: 1.0 }}
              >
                KEYSTONE
              </HeaderText>
              <HeaderText 
                id='main'
                pose={this.state.selection}
                style={{ position: 'absolute', left: `${textLeft2}vw`, top: '45%', fontSize: '10em' }}
                unSelected={{ xPosition: '0%', opacity: 0 }}
                partUnselected={{ xPosition: '-20%', opacity: 0 }}
                neutral={{ xPosition: '0%', opacity: 1 }}
                partSelected={{ xPosition: '-20%', opacity: 0 }}
                selected={{ xPosition: '100%', opacity: 1.0 }}
              >
                COME
              </HeaderText>
              <HomeInnerContainer backgroundColor={globalStyle.colors.keystoneBlack} pose={this.state.selection} >
                <HeaderText 
                  id='main'
                  pose={this.state.selection}
                  style={{ position: 'absolute', left: `${textLeft1}vw`, top: '25%', fontSize: '10em'}}
                  unSelected={{ xPosition: '100%', opacity: 0 }}
                  partUnselected={{ xPosition: '20%', opacity: 0 }}
                  neutral={{ xPosition: '0%', opacity: 1 }}
                  partSelected={{ xPosition: '20%', opacity: 0 }}
                  selected={{ xPosition: '0%', opacity: 1.0 }}
                >
                  WEL
                </HeaderText>
                <HeaderText 
                  id='submain'
                  pose={this.state.selection}
                  style={{ position: 'absolute', left: `${20}%`, top: '28%', fontSize: '5em' }}
                  unSelected={{ xPosition: '100%', opacity: 0 }}
                  partUnselected={{ xPosition: '35%', opacity: 1 }}
                  neutral={{ xPosition: '0%', opacity: 0 }}
                  partSelected={{ xPosition: '0%', opacity: 0 }}
                  selected={{ xPosition: '0%', opacity: 1.0 }}
                >
                  DAVID FIGUEROA
                </HeaderText>
              </HomeInnerContainer>
            </MainContainer>

            <VerticalMargin style={{gridArea: '2 / 3 / 2 / 3', ...mainContainers.vertical}}>
              <Link to='/keystone'>
                <KeystoneOutline 
                    extendMouseOver={() => this.setState({ selection: 'partSelected' })}
                    extendMouseLeave={() => this.setState({ selection: 'neutral' })}
                />
              </Link>
            </VerticalMargin>

            <HorizontalMargin style={{gridArea: '3 / 1 / 3 / 4', ...mainContainers.horizontal}}/>
          </header>
        </div>
      );
    }
  }