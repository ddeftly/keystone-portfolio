import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import Parser from 'rss-parser';

import { KeystoneOutline } from '../assets/customSVGs';
import Menu, { MenuItem } from '../components/misc/animatedMenu';
import { MainContainer, PageInnerContainer, HorizontalMargin, VerticalMargin } from '../components/misc/containers';
import { MenuText, Header } from '../components/misc/text';
import Socials from '../components/pages/socials';

import { mainContainers } from '../styles/misc/containerStyles';
import globalStyle, { homeHeader } from '../styles/globalStyle';
import '../styles/globalCSS.css';

import '../styles/pages/homeStyle.css';

const portfolioMenu = [
    { key: 'CODE.', },
    { key: 'WRITE.' },
    { key: 'PLAY.' }
];

export default class Portfolio extends Component {
    state = {
        keystoneSelection: 'unselected',
        selection: 'unselected',
        menuSelected: false,
        selectedItem: 'CODE.',
        mediumFeed: []
    }
  
    switchContainer = () => {
      if (this.state.selection === 'unselected') {
        this.setState({ selection: 'selected', menuSelected: true })
      } else {
        this.setState({ selection: 'unselected' })
        setTimeout(() => this.setState({ menuSelected: false }), 400)
      }
    }

    getMediumFeed = async () => {
        let parser = new Parser();
        let feed = await parser.parseURL('https://cors-anywhere.herokuapp.com/https://medium.com/feed/@David_Figueroa').then(res => {
            let entries = [];
            res.items.forEach((item, index) => {
                if (item.categories) {
                    console.log(item.categories)
                    entries.push(item)
                }
            })
            let sliceEntries = entries.slice(0, 5)
            return sliceEntries
        })
        let mediumFeed = feed.map(entry => {
            let entryObj = {};
            entryObj['title'] = entry.title;
            entryObj['link'] = entry.link;
            entryObj['date'] = entry.isoDate;
            return(entryObj)
        })
        this.setState({ mediumFeed: mediumFeed })
    }

    setContent = (item) => {
        if (item === 'CODE.') {
            console.log('coding')
            return(
                <div 
                    style={{
                        display: 'grid',
                        gridTemplate: '1fr / 1fr .3fr'
                    }}
                >
                    <div 
                        style={{ 
                            gridArea: '1 / 1 / 1 / 1' ,
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >
                        <div style={{flexDirection: 'column'}}>
                            <div>
                                <text className='contentTitle' style={{fontSize: '1.5em'}}>{'PROJECTS & EXPERIENCE'}</text>
                            </div>
                            <div className='content' style={{flexDirection: 'column', marginTop: '.5em'}}>
                                <text>
                                    FULL-STACK DEVELOPER
                                    <br/>
                                    Keystone - Life Analytics
                                    <ul>
                                        <li>Managed project through entire production cycle</li>
                                        <li>Responsible for UI/UX design, React Native development, and database architecture</li>
                                        <li>Created, published, and maintained product website</li>
                                    </ul>
                                </text>
                            </div>
                        </div>
                    </div>
                    <div className='contentTitle' style={{ gridArea: '1 / 2 / 1 / 2' }}>
                        <text style={{fontSize: '1.5em'}}>SKILLS</text>
                    </div>
                </div>
            )
        } else if (item === 'WRITE.') {
            return(
                <div style={{ height: '100%', width: '100%', paddingTop: '3em' }}>
                    {
                        this.state.mediumFeed.map((item, index) => (
                            <div style={{ width: '100%', height: '5em', margin: '.25em 0 .25em 0'}}>
                                <a href={item.link} style={{ textDecoration: 'none', color: 'black' }}>
                                    <text style={{fontSize: '1.4em', textDecoration: 'none'}}>
                                        {item.title}
                                    </text>
                                </a>
                            </div>
                        ))
                    }
                </div>
            )
        } else if (item === 'PLAY.') {

        }
    }

    componentDidMount() {
        this.getMediumFeed()
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
                                    onClick={() => {
                                        this.setState({ selectedItem: item.key })
                                    }}
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

              <div 
                style={{ display: 'grid', gridTemplate: 'repeat(12, 1fr) / repeat(12, 1fr)', height: '100%', width: '100%'}}
              >

              {/* CONTENT QUOTE HEADER */}
                <div 
                    className='content'
                    style={{
                        gridArea: '4 / 3 / 8 / 5', 
                        display: 'grid', 
                        gridTemplate: 'repeat(3, 1fr) / repeat(4, 1fr)',
                        backgroundColor: globalStyle.colors.fireyRose,
                        padding: '1em',

                    }}
                >
                    <text style={{fontSize: '2em', gridArea: '1 / 1 / 1 / 1',}}>
                        Eat.
                    </text>
                    <text style={{fontSize: '2em', gridArea: '2 / 1 / 2 / 1'}}>
                        Sleep.
                    </text>
                    <text style={{fontSize: '2em', gridArea: '3 / 1 / 3 / 1'}}>
                        Code.
                    </text>
                    <text id='special' style={{fontSize: '2em', gridArea: '4 / 1 / 4 / 1', paddingLeft: '1.25em', textAlign: 'center'}}>
                        Repeat.
                    </text>
                </div>

                {/* CONTENT QUOTE HEADER */}
                <div
                    style={{
                        gridArea: '8 / 3 / 11 / 6',
                        backgroundColor: '#EFE9E7',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                />

                {/* CONTENT */}
                <div
                    style={{
                        gridArea: '3 / 7 / 11 / 12',
                        padding: '1em',
                    }}
                >
                    {
                        this.setContent(this.state.selectedItem)
                    }
                </div>
              </div>
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