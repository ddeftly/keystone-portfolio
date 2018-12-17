import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import Parser from 'rss-parser';

import { KeystoneOutline } from '../assets/customSVGs';
import Menu, { MenuItem } from '../components/misc/animatedMenu';
import { MainContainer, PageInnerContainer, HorizontalMargin, VerticalMargin } from '../components/misc/containers';
import Socials from '../components/pages/socials';

import { Code } from '../components/portfolio/content';

import { mainContainers } from '../styles/misc/containerStyles';
import globalStyle, { homeHeader } from '../styles/globalStyle';
import '../styles/pages/portfolioStyle.css';
import '../styles/globalCSS.css';

import '../styles/pages/homeStyle.css';

const portfolioMenu = [
    { key: 'CODE.', },
    { key: 'WRITE.' },
    { key: 'PLAY.' }
];

export default class Portfolio extends Component {
    state = {
        scrollContent: <Code/>,
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
            return(
                <div/>
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

                    { /* MENU CONTAINER */ }
                    <PageInnerContainer style={{backgroundColor: 'white', position: 'absolute', zIndex: 1}} pose={this.state.selection} className="header">
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
                    
                    { /* PORTFOLIO CONTENT */ }
                    <div style={{maxHeight:'100%', overflow:'auto', height: '100%', width: '100%', position: 'relative'}}>

                        {/* ABOUT ME */}
                        <div style={{ height: '100%', width: '100%', display: 'grid', gridTemplate: 'repeat(5, 1fr) / repeat(5, 1fr)', }}>
                            <div 
                                style={{ 
                                    position: 'absolute', 
                                    width: '100%', 
                                    height: '100%', 
                                    display: 'grid', 
                                    gridTemplate: 'repeat(20, 1fr) / repeat(20, 1fr)' 
                                }}
                            >
                                <div style={{ position: 'absolute', left: '11%', top: '10%', backgroundColor: 'black', height: '.75em', width: '4em' }}/>
                                <div className='titleText' style={{ gridArea: ' 3 / 3 / 12 / 12', }}>
                                    <text style={{ fontSize: '8em', lineHeight: '1em', position: 'relative', top: '.15em' }}>ABOUT ME.</text>
                                </div>
                                <div className='titleText' style={{ gridArea: ' 12 / 3 / 16 / 12', marginTop: '.'}}>
                                    <text style={{ fontSize: '2.6em', color: 'white' }}>
                                        Why doesn't this exist yet?
                                    </text>
                                    <text id='subtitleThin' style={{ fontSize: '2.6em', color: 'white' }}>
                                        Guess I'll make it.
                                    </text>
                                </div>
                                <div style={{ gridArea: ' 16 / 3 / 20 / 12', }}>
                                    <text style={{ fontSize: '1.3em', color: 'white', lineHeight: '1.5em', position: 'relative', top: '.1em' }}>
                                        I'm interested in the intersection between digital health, design, data science, and blockchain.
                                    </text>
                                </div>
                            </div>
                            <div style={{ backgroundColor: globalStyle.colors.glacierWhite, gridArea: '1 / 1 / 3 / 6' }}/> 
                            <div style={{ backgroundColor: globalStyle.colors.portfolioPurple, gridArea: '3 / 1 / 6 / 4' }}/>
                            <div style={{ objectFit: 'scale-down', gridArea: '3 / 4 / 6 / 6', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
                            </div>
                        </div>

                        <div style={{ height: '7.5%', width: '100%', backgroundColor: 'white' }}/>
                        
                        {/* WEB DEV */}
                        <div style={{ height: '100%', width: '100%', backgroundColor: globalStyle.colors.keystoneBlack }}>
                            <div 
                                style={{ 
                                    position: 'absolute', 
                                    width: '100%', 
                                    height: '100%', 
                                    display: 'grid', 
                                    gridTemplate: 'repeat(20, 1fr) / repeat(20, 1fr)' 
                                }}
                            >
                                <div id='subtitleBold' style={{ gridArea: ' 4 / 5 / 12 / 12', }}>
                                    <svg style={{ height: 12, width: 12, position: 'relative', bottom: '.9em', right: '1em' }}>
                                        <circle cx="6" cy="6" r="6" fill="white" />
                                    </svg>
                                    <text style={{ fontSize: '2.5em', lineHeight: '1em', color: 'white'}}>WEB DEV</text>
                                </div>
                                <div className='titleText' style={{ gridArea: '4 / 8 / 12 / 18',}}>
                                    <text style={{ fontSize: '2.6em', color: 'white' }}>
                                        Why doesn't this exist yet?
                                    </text>
                                    <text id='subtitleThin' style={{ fontSize: '2.6em', color: 'white' }}>
                                        Guess I'll make it.
                                    </text>
                                </div>
                                <div style={{ gridArea: ' 16 / 8 / 20 / 18', }}>
                                    <text style={{ fontSize: '1.3em', color: 'white', lineHeight: '1.5em', position: 'relative', top: '.1em' }}>
                                        I'm interested in the intersection between digital health, design, data science, and blockchain.
                                    </text>
                                </div>
                            </div>
                        </div>

                        <div style={{ height: '7.5%', width: '100%', backgroundColor: 'white' }}/>

                        {/* APP DEV */}
                        <div style={{ height: '100%', width: '100%', backgroundColor: globalStyle.colors.electricBlue }}/>

                        <div style={{ height: '7.5%', width: '100%', backgroundColor: 'white' }}/>

                        {/* DATA SCIENCE */}
                        <div style={{ height: '100%', width: '100%', backgroundColor: globalStyle.colors.glacierWhite }}/>

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