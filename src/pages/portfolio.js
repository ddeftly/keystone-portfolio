import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";

import { KeystoneOutline } from '../assets/customSVGs';
import Menu from '../components/misc/animatedMenu';
import { MainContainer, PageInnerContainer, HorizontalMargin, VerticalMargin } from '../components/misc/containers';
import { MenuText } from '../components/misc/text';

import { mainContainers } from '../styles/misc/containerStyles';
import globalStyle, { homeHeader } from '../styles/globalStyle';
import '../styles/globalCSS.css';

import '../styles/pages/homeStyle.css';

export default class Portfolio extends Component {
    state = {
      selection: 'unselected',
      menuSelected: false
    }
  
    switchContainer = () => {
      if (this.state.selection === 'unselected') {
        this.setState({ selection: 'selected' })
      } else {
        this.setState({ selection: 'unselected' })
      }
    }
  
    render() {
      return (
        <div>
          <header style={{...homeHeader}}>
            <Menu 
              style={{position: 'absolute', left: '5em', top: 'calc(50% - 2.5em)'}}
              onClick={this.switchContainer}
            />
          
            <HorizontalMargin style={{gridArea: '1 / 1 / 1 / 4', ...mainContainers.horizontal}}/>
            
            <VerticalMargin style={{gridArea: '2 / 1 / 2 / 1', ...mainContainers.vertical}}>

            </VerticalMargin>

            <MainContainer style={{gridArea: '2 / 2 / 2 / 2', backgroundColor: globalStyle.colors.portfolioGray}}>
              <PageInnerContainer backgroundColor='white' pose={this.state.selection} style={{justifyContent: 'center', alignItems: 'center'}} className="header">
                <MenuText style={{position: 'absolute'}} pose={this.state.selection}>RESUME</MenuText>
              </PageInnerContainer>
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