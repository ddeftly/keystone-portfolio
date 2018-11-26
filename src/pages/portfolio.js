import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";

import { KeystoneOutline, DFOutline } from '../assets/customSVGs';
import Menu from '../components/misc/animatedMenu';
import { MainContainer, HeaderContainer, InnerContainer, HorizontalMargin, VerticalMargin } from '../components/misc/containers';
import { HeaderText } from '../components/misc/text';

import { mainContainers } from '../styles/misc/containerStyles';
import globalStyle, { homeHeader } from '../styles/globalStyle';

import '../styles/pages/homeStyle.css';

export default class Portfolio extends Component {
    state = {
      selection: 'neutral',
      menuSelected: false
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
            <Menu style={{position: 'absolute', left: '5em', top: 'calc(50% - 2.5em)'}}/>
          
            <HorizontalMargin style={{gridArea: '1 / 1 / 1 / 4', ...mainContainers.horizontal}}/>
            
            <VerticalMargin style={{gridArea: '2 / 1 / 2 / 1', ...mainContainers.vertical}}>

            </VerticalMargin>

            <MainContainer style={{gridArea: '2 / 2 / 2 / 2', backgroundColor: globalStyle.colors.portfolioGray}}>

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