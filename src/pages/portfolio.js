import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import Parser from 'rss-parser';
import Lottie from 'react-lottie';
import ScrollTrigger from 'react-scroll-trigger';

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
        mediumFeed: [],
        lottieStop: true,
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

    triggerLottie = () => {
        this.setState({ lottieStop: false })
    }

    componentDidMount() {
        this.getMediumFeed()
        window.addEventListener('scroll', this.triggerLottie())
    }
  
    render() {
      return (
        <div>
            <header style={{...homeHeader}}>
                <HorizontalMargin id='subname' style={{gridArea: '1 / 2 / 1 / 2', ...mainContainers.horizontal}}>
                    <Link to='/home' style={{ textDecoration: 'none' }}>
                        <text style={{ color: globalStyle.colors.keystoneBlack }}>DAVID A FIGUEROA</text>
                    </Link>                    
                    <Socials/>
                </HorizontalMargin>            
                <VerticalMargin style={{gridArea: '2 / 1 / 2 / 1', ...mainContainers.vertical}}>

                </VerticalMargin>

                <MainContainer style={{gridArea: '2 / 2 / 2 / 2', backgroundColor: globalStyle.colors.portfolioGray}}>

                    { /* MENU CONTAINER 
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
                    */ }
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
                                <div className='titleText' style={{ gridArea: ' 12 / 3 / 16 / 12'}}>
                                    <text style={{ fontSize: '2.6em', color: 'white' }}>
                                       Why doesn't this exist yet? <br/>
                                    </text>
                                    <text id='subtitleThin' style={{ fontSize: '2.6em', color: 'white' }}>
                                        Guess I'll make it.
                                    </text>
                                </div>
                                <div style={{ gridArea: ' 16 / 3 / 20 / 12', }}>
                                    <text style={{ fontSize: '1.3em', color: 'white', lineHeight: '1.5em', position: 'relative', top: '.1em' }}>
                                       I'm an active self-learner with a passion for data, digital health, and development. I'm searching for new ways to bridge the gap between healthcare and new tech.
                                    </text>
                                </div>
                            </div>
                            <div style={{ backgroundColor: globalStyle.colors.glacierWhite, gridArea: '1 / 1 / 3 / 6' }}/> 
                            <div style={{ backgroundColor: globalStyle.colors.portfolioPurple, gridArea: '3 / 1 / 6 / 4' }}/>
                            <div style={{ objectFit: 'scale-down', gridArea: '3 / 4 / 6 / 6', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
                                <img src={require('../assets/photos/dfphoto.jpg')} alt='profilepic' style={{ height: '100%', width: '100%' }}/>
                            </div>
                        </div>

                        <div style={{ height: '5%', width: '100%', backgroundColor: 'white' }}/>
                        
                        {/* WEB DEV */}
                        <div style={{ height: '60%', width: '100%', backgroundColor: globalStyle.colors.keystoneBlack }}>
                            <div 
                                style={{ 
                                    position: 'absolute', 
                                    width: '100%', 
                                    height: '100%', 
                                    display: 'grid', 
                                    gridTemplate: 'repeat(20, 1fr) / repeat(20, 1fr)' 
                                }}
                            >
                                <div id='subtitleBold' style={{ gridArea: '4 / 3 / 7 / 12', }}>
                                    <svg style={{ height: 12, width: 12, position: 'relative', bottom: '.9em', right: '1em' }}>
                                        <circle cx="6" cy="6" r="6" fill="white" />
                                    </svg>
                                    <text style={{ fontSize: '2.5em', color: 'white'}}>WEB DEVELOPMENT</text>
                                </div>
                                <div style={{ gridArea: '5 / 4 / 12 / 10'}}>
                                    <Lottie 
                                        options={{
                                            autoplay: false,
                                            loop: true,
                                            animationData: require('../assets/lottie/send.json')
                                        }}
                                        style={{
                                            height: '150%',
                                            width: '150%',
                                            position: 'relative',
                                            left: '6.5em',
                                            bottom: '5em'
                                        }}
                                        isStopped={this.state.lottieStop}
                                    />
                                </div>
                                <div className='titleText' style={{ gridArea: '4 / 12 / 7 / 18' }}>
                                    <text style={{ fontSize: '2.6em', color: 'white' }}>
                                        Good design <br/>
                                    </text>
                                    <text id='subtitleThin' style={{ fontSize: '2.6em', color: 'white' }}>
                                        equals happier people.
                                    </text>
                                </div>
                                <div style={{ gridArea: ' 8 / 12 / 20 / 18', }}>
                                    <text style={{ fontSize: '1.3em', color: 'white', lineHeight: '1.5em', position: 'relative', top: '.1em' }}>
                                        Solid web development means delivering user experiences that are both simple and intriguing.
                                    </text>
                                </div>
                            </div>
                        </div>

                        <div style={{ height: '5%', width: '100%', backgroundColor: 'white' }}/>

                        {/* APP DEV */}
                        <div style={{ height: '60%', width: '100%', backgroundColor: globalStyle.colors.electricBlue }}>
                            <div 
                                style={{ 
                                    position: 'absolute', 
                                    width: '100%', 
                                    height: '100%', 
                                    display: 'grid', 
                                    gridTemplate: 'repeat(20, 1fr) / repeat(20, 1fr)' 
                                }}
                            >
                                <div id='subtitleBold' style={{ gridArea: '4 / 3 / 7 / 12', }}>
                                    <svg style={{ height: 12, width: 12, position: 'relative', bottom: '.9em', right: '1em' }}>
                                        <circle cx="6" cy="6" r="6" fill="white" />
                                    </svg>
                                    <text style={{ fontSize: '2.5em', color: 'white'}}>APP DEVELOPMENT</text>
                                </div>
                                <div style={{ gridArea: '5 / 4 / 12 / 10'}}>
                                    <Lottie 
                                        options={{
                                            autoplay: false,
                                            loop: true,
                                            animationData: require('../assets/lottie/world.json')
                                        }}
                                        style={{
                                            height: '150%',
                                            width: '150%',
                                            position: 'relative',
                                            left: '6.5em',
                                            bottom: '5em'
                                        }}
                                        isStopped={this.state.lottieStop}
                                    />
                                </div>
                                <div className='titleText' style={{ gridArea: '4 / 12 / 7 / 18' }}>
                                    <text style={{ fontSize: '2.6em', color: 'white' }}>
                                        The future of healthcare <br/>
                                    </text>
                                    <text id='subtitleThin' style={{ fontSize: '2.6em', color: 'white' }}>
                                        is in our pockets.
                                    </text>
                                </div>
                                <div style={{ gridArea: ' 9 / 12 / 20 / 18', }}>
                                    <text style={{ fontSize: '1.3em', color: 'white', lineHeight: '1.5em', position: 'relative', top: '.1em' }}>
                                        Our smartphones know us better than we do. I think they're the key to building better habits. 
                                    </text>
                                </div>
                            </div>
                        </div>

                        <div style={{ height: '5%', width: '100%', backgroundColor: 'white' }}/>


                        {/* DATA SCIENCE */}
                        <div style={{ height: '100%', width: '100%', backgroundColor: globalStyle.colors.glacierWhite }}>
                            <div 
                                style={{ 
                                    position: 'absolute', 
                                    width: '100%', 
                                    height: '100%', 
                                    display: 'grid', 
                                    gridTemplate: 'repeat(20, 1fr) / repeat(20, 1fr)' 
                                }}
                            >
                                <div className='titleText' style={{ gridArea: '3 / 12 / 8 / 16' }}>
                                    <text style={{ fontSize: '2.6em', color: 'black' }}>
                                        Data science is part of my<br/>
                                    </text>
                                    <text id='subtitleThin' style={{ fontSize: '2.6em', color: 'black' }}>
                                        workflow.
                                    </text>
                                </div>
                                <div style={{ gridArea: '11 / 4 / 18 / 8', flexDirection: 'column', display: 'flex' }}>
                                    <svg viewBox="0 0 10.33 10.33" style={{width: (10.33 * 5), height: (10.33 * 5)}}>
                                        <circle  cx="5.16" cy="5.16" r="5.06" fill='none' stroke='black' strokeWidth='.2'/>
                                        <path d="M4.43,6.84h.71V3.54l-.82.19V3.61l.95-.21V6.84H6V7H4.43Z" strokeWidth='.1' stroke='black'/>
                                    </svg>
                                    <text id='subtitleBold' style={{ fontSize: '1.5em', color: 'black', marginTop: '1em'}}>Gather</text>
                                    <text style={{ fontSize: '1em', color: 'black', marginTop: '1em'}}>
                                        Gathering data should be painless for users on the front-end and easy to manipulate on the back-end. 
                                    </text>
                                </div>
                                <div style={{ gridArea: '11 / 9 / 18 / 13', flexDirection: 'column', display: 'flex' }}>
                                    <svg viewBox="0 0 10.33 10.33" style={{width: (10.33 * 5), height: (10.33 * 5)}}>
                                        <circle  cx="5.16" cy="5.16" r="5.06" fill='none' stroke='black' strokeWidth='.2'/>
                                        <path strokeWidth='.05' stroke='black' d="M4,7V6.84L5.17,5.5a4.38,4.38,0,0,0,.48-.66,1,1,0,0,0,.16-.52A.76.76,0,0,0,5,3.5a.87.87,0,0,0-.67.26.92.92,0,0,0-.24.66H3.93a1,1,0,0,1,.27-.74A1,1,0,0,1,5,3.37a1,1,0,0,1,.71.25.91.91,0,0,1,.27.7,1.14,1.14,0,0,1-.19.61,7.07,7.07,0,0,1-.54.71l-1,1.19H6V6.26h.13V7Z"/>
                                    </svg>
                                    <text id='subtitleBold' style={{ fontSize: '1.5em', color: 'black', marginTop: '1em'}}>Analyze</text>
                                    <text style={{ fontSize: '1em', color: 'black', marginTop: '1em'}}>
                                        Understanding a dataset means interpreting summary-level statistics and looking for hidden relationships.
                                    </text>
                                </div>
                                <div style={{ gridArea: '11 / 14 / 18 / 18', flexDirection: 'column', display: 'flex'}}>
                                    <svg viewBox="0 0 10.33 10.33" style={{width: (10.33 * 5), height: (10.33 * 5)}}>
                                        <circle  cx="5.16" cy="5.16" r="5.06" fill='none' stroke='black' strokeWidth='.2'/>
                                        <path strokeWidth='.05' stroke='black' d="M4.76,5.09H5a1,1,0,0,0,.7-.22A.7.7,0,0,0,6,4.32a.82.82,0,0,0-.22-.59.86.86,0,0,0-.65-.23,1,1,0,0,0-.65.23.78.78,0,0,0-.27.62H4.09a.84.84,0,0,1,.29-.7,1.07,1.07,0,0,1,.74-.27,1,1,0,0,1,.73.26.9.9,0,0,1,.28.7A.79.79,0,0,1,6,4.84a1.1,1.1,0,0,1-.48.32A1,1,0,0,1,6,5.47.83.83,0,0,1,6.2,6a.92.92,0,0,1-.29.73A1.1,1.1,0,0,1,5.14,7a1.24,1.24,0,0,1-.79-.27A.88.88,0,0,1,4,6h.12a.84.84,0,0,0,.29.65,1,1,0,0,0,.72.25,1,1,0,0,0,.69-.22A.82.82,0,0,0,6.07,6a.69.69,0,0,0-.28-.61A1.28,1.28,0,0,0,5,5.23H4.76Z"/>
                                    </svg>
                                    <text id='subtitleBold' style={{ fontSize: '1.5em', color: 'black', marginTop: '1em'}}>Implement</text>
                                    <text style={{ fontSize: '1em', color: 'black', marginTop: '1em'}}>
                                        Use data-informed insights to set useful goals, change behaviors, and see better results.
                                    </text>
                                </div>
                            </div>
                        </div>
                        
                        <div style={{ height: '5%', width: '100%', backgroundColor: 'white' }}/>
                        
                        {/* FEED  */}
                        <div style={{ height: '45%', width: '100%', backgroundColor: globalStyle.colors.keystoneBlack }}>
                            <div 
                                style={{ 
                                    position: 'absolute', 
                                    width: '100%', 
                                    height: '45%', 
                                    display: 'grid', 
                                    gridTemplate: 'repeat(10, 1fr) / repeat(10, 1fr)' 
                                }}
                            >
                                <div className='titleText' style={{ gridArea: '2 / 3 / 10 / 6', }}>
                                    <text style={{ fontSize: '6em', color: 'white' }}>
                                        MY <br/>
                                        FEED
                                    </text>
                                </div>
                                <div id='subtitleBold' style={{ gridArea: '2 / 6 / 10 / 10' }}>
                                {
                                    this.state.mediumFeed.map((item, index) => (
                                        <div style={{ width: '100%', height: '3.25em', margin: '.25em 0 .25em 0'}}>
                                            <a href={item.link} style={{ textDecoration: 'none', color: 'white' }}>
                                                <text style={{fontSize: '1em', textDecoration: 'none'}}>
                                                    {item.title}
                                                </text>
                                            </a>
                                        </div>
                                    ))
                                }
                                </div>
                            </div>
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