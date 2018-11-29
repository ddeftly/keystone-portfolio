import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";

import { KeystoneOutline } from '../assets/customSVGs';
import Menu, { MenuItem } from '../components/misc/animatedMenu';
import { MainContainer, PageInnerContainer, PageInnerContainer2, HorizontalMargin, VerticalMargin } from '../components/misc/containers';
import { MenuText, Header } from '../components/misc/text';
import Socials from '../components/pages/socials';

import { mainContainers } from '../styles/misc/containerStyles';
import globalStyle, { homeHeader } from '../styles/globalStyle';
import '../styles/globalCSS.css';

import '../styles/pages/homeStyle.css';

const portfolioMenu = [
    { key: 'CODE', },
    { key: 'HEALTH' },
    { key: 'PLAY' }
];

export default class Portfolio extends Component {
    state = {
        keystoneSelection: 'unselected',
        selection: 'unselected',
        menuSelected: false,
        selectedItem: 'CODE'
    }
  
    switchContainer = () => {
      if (this.state.selection === 'unselected') {
        this.setState({ selection: 'selected', menuSelected: true })
      } else {
        this.setState({ selection: 'unselected' })
        setTimeout(() => this.setState({ menuSelected: false }), 400)
      }
    }

    switchMenuItem = (item) => {
        this.setState({ selectedItem: item })
        console.log(item.key)
    }

    componentDidMount() {
        console.log(this.state.selectedItem)
    }
  
    render() {
      return (
        <div>
          <header style={{...homeHeader}}>
          
            <HorizontalMargin id='subname' style={{gridArea: '1 / 2 / 1 / 2', ...mainContainers.horizontal}}>
              <text>DAVID A FIGUEROA</text>
              <Socials/>
            </HorizontalMargin>            
            <VerticalMargin style={{gridArea: '2 / 1 / 2 / 1', ...mainContainers.vertical}}>
                <Menu 
                    onClick={this.switchContainer}
                />
            </VerticalMargin>

            <MainContainer style={{gridArea: '2 / 2 / 2 / 2', backgroundColor: globalStyle.colors.portfolioGray}}>
              <PageInnerContainer style={{backgroundColor: 'white'}} pose={this.state.selection} className="header">
                {
                    this.state.menuSelected ?
                    <div 
                        style={{ 
                            textAlign: 'left', 
                            display: 'flex', 
                            flexDirection: 'column', 
                            height: '50%', 
                            width: '70%',
                            top: '25%', 
                            position: 'relative', 
                            justifyContent: 'center', 
                            alignItems: 'center' 
                        }}
                    >
                        {
                            portfolioMenu.map((item) => (
                                <MenuItem 
                                    onClick={() => this.setState({ selectedItem: item.key })}
                                    backgroundColor={item.key === this.state.selectedItem ? globalStyle.colors.electricBlue : null}
                                    style={{ 
                                        cursor: 'pointer'
                                    }} 
                                    pose={this.state.selection}
                                    key={item.key}
                                >
                                    {item.key}
                                </MenuItem>
                            ))
                        }
                    </div> :
                    null
                }
              </PageInnerContainer>
              <PageInnerContainer2 pose={'selected'} style={{transform: 'rotate(270deg)', position: 'absolute', right: '3.3%', height: '86%', backgroundColor: globalStyle.colors.keystoneBlack, cursor: 'default'}}  className="header">
                        <Header style={{ color: 'white', fontSize: '5em' }}>
                            KEYSTONE
                        </Header>
              </PageInnerContainer2>
            </MainContainer>

            <VerticalMargin style={{gridArea: '2 / 3 / 2 / 3', ...mainContainers.vertical}}>
              <Link to='/keystone'> 
                <KeystoneOutline 
                    extendMouseOver={() => this.setState({ keystoneSelection: 'selected' })}
                    extendMouseLeave={() => this.setState({ keystoneSelection: 'unselected' })}
                />
              </Link>
            </VerticalMargin>

            <HorizontalMargin style={{gridArea: '3 / 1 / 3 / 4', ...mainContainers.horizontal}}/>
          </header>
        </div>
      );
    }
  }