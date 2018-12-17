import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Lottie from 'react-lottie';

import { DFOutline, HealthKitSVG, SaveMoney, LineChart, Calendar } from '../assets/customSVGs';
import { MainContainer, HorizontalMargin, VerticalMargin } from '../components/misc/containers';
import Socials from '../components/pages/socials';

import { mainContainers } from '../styles/misc/containerStyles';
import globalStyle, { homeHeader } from '../styles/globalStyle';
import '../styles/pages/portfolioStyle.css';
import '../styles/globalCSS.css';

import '../styles/pages/homeStyle.css';

export default class Keystone extends Component {
    state = {
        lottieStop: true,
    }

    triggerLottie = () => {
        this.setState({ lottieStop: false })
    }

    componentDidMount() {
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
                    <Link to='/portfolio' style={{position: 'relative', left: '.2rem'}}>
                        <DFOutline                
                            extendMouseOver={() => this.setState({ selection: 'partUnselected' })}
                            extendMouseLeave={() => this.setState({ selection: 'neutral' })}
                        />
                    </Link>
                </VerticalMargin>

                <MainContainer style={{gridArea: '2 / 2 / 2 / 2', backgroundColor: globalStyle.colors.portfolioGray}}>
                    
                    { /* KEYSTONE CONTENT */ }
                    <div style={{maxHeight:'100%', overflow:'auto', height: '100%', width: '100%', position: 'relative'}}>

                        {/* KEYSTONE */}
                        <div style={{ height: '100%', width: '100%', display: 'grid', gridTemplate: 'repeat(10, 1fr) / repeat(10, 1fr)', }}>
                            <div 
                                style={{ 
                                    position: 'absolute', 
                                    width: '100%', 
                                    height: '100%', 
                                    display: 'grid', 
                                    gridTemplate: 'repeat(20, 1fr) / repeat(20, 1fr)' 
                                }}
                            >
                                <div style={{ position: 'absolute', left: '15.5%', top: '30%', backgroundColor: 'black', height: '.75em', width: '5em' }}/>
                                <div className='titleText' style={{ gridArea: '7 / 4 / 12 / 12', }}>
                                    <text style={{ fontSize: '8em', lineHeight: '1em', position: 'relative', top: '.15em' }}>KEY STONE.</text>
                                </div>
                                <div className='titleText' style={{ gridArea: '8 / 12 / 11 / 18'}}>
                                    <text style={{ fontSize: '2.6em', color: 'white' }}>
                                       Life Analytics <br/>
                                    </text>
                                    <text id='subtitleThin' style={{ fontSize: '2em', color: 'white' }}>
                                        Mood & Activity Tracker
                                    </text>
                                </div>
                                <div style={{ gridArea: '11 / 12 / 20 / 19'}}>
                                    <text style={{ fontSize: '1.3em', color: 'white', lineHeight: '1.5em', position: 'relative', top: '.1em' }}>
                                    Keystone is an all-purpose activity and mood tracker with one goal: to help you find the activities that matter most. Keystone is powered by data that represents your life.                                     </text>
                                </div>
                            </div>       
                            <div style={{ backgroundColor: globalStyle.colors.glacierWhite, gridArea: '1 / 1 / 11 / 4' }}/> 
                            <div style={{ backgroundColor: globalStyle.colors.iguanaGreen, gridArea: '1 / 4 / 11 / 11' }}/>
                        </div>

                        <div style={{ height: '5%', width: '100%', backgroundColor: 'white' }}/>
                        
                        {/* HOW IT WORKS */}
                        <div style={{ height: '150%', width: '100%', backgroundColor: globalStyle.colors.glacierWhite }}>
                            <div 
                                style={{ 
                                    position: 'absolute', 
                                    width: '100%', 
                                    height: '100%', 
                                    display: 'grid', 
                                    gridTemplate: 'repeat(20, 1fr) / repeat(20, 1fr)' 
                                }}
                            >
                                <div style={{ gridArea: '1 / 1 / 21 / 10', height: '150%', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: '2.5em', paddingRight: '2.5em' }}>
                                    <text className='titleText' style={{ fontSize: '2.6em', color: 'black', marginBottom: '1em' }}>
                                       How it works:
                                    </text>                                    
                                    <div style={{ flexDirection: 'column', display: 'flex', marginBottom: '4em' }}>
                                        <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
                                            <svg viewBox="0 0 10.33 10.33" style={{width: (10.33 * 5), height: (10.33 * 5)}}>
                                                <circle  cx="5.16" cy="5.16" r="5.06" fill='none' stroke='black' strokeWidth='.2'/>
                                                <path d="M4.43,6.84h.71V3.54l-.82.19V3.61l.95-.21V6.84H6V7H4.43Z" strokeWidth='.1' stroke='black'/>
                                            </svg>
                                            <text id='subtitleBold' style={{ fontSize: '2em', color: 'black', marginLeft: '.5em'}}>Create activities.</text>
                                        </div>
                                        <text style={{ fontSize: '1.35em', color: 'black', marginTop: '.5em'}}>
                                            You can track anything, from whether you completed a habit or activity to how long you spent doing it. 
                                        </text>
                                    </div>
                                    <div style={{ flexDirection: 'column', display: 'flex', marginBottom: '4em' }}>
                                        <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
                                            <svg viewBox="0 0 10.33 10.33" style={{width: (10.33 * 5), height: (10.33 * 5)}}>
                                                <circle  cx="5.16" cy="5.16" r="5.06" fill='none' stroke='black' strokeWidth='.2'/>
                                                <path strokeWidth='.05' stroke='black' d="M4,7V6.84L5.17,5.5a4.38,4.38,0,0,0,.48-.66,1,1,0,0,0,.16-.52A.76.76,0,0,0,5,3.5a.87.87,0,0,0-.67.26.92.92,0,0,0-.24.66H3.93a1,1,0,0,1,.27-.74A1,1,0,0,1,5,3.37a1,1,0,0,1,.71.25.91.91,0,0,1,.27.7,1.14,1.14,0,0,1-.19.61,7.07,7.07,0,0,1-.54.71l-1,1.19H6V6.26h.13V7Z"/>
                                            </svg>
                                            <text id='subtitleBold' style={{ fontSize: '2em', color: 'black', marginLeft: '.5em'}}>Record data.</text>
                                        </div>
                                        <text style={{ fontSize: '1.35em', color: 'black', marginTop: '.5em'}}>
                                            As you collect data, Keystone will display it visually and routinely analyze your activities to find which of them affect your mood the most.                                         
                                        </text>
                                    </div>
                                    <div style={{ flexDirection: 'column', display: 'flex', marginBottom: '4em' }}>
                                        <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
                                            <svg viewBox="0 0 10.33 10.33" style={{width: (10.33 * 5), height: (10.33 * 5)}}>
                                                <circle  cx="5.16" cy="5.16" r="5.06" fill='none' stroke='black' strokeWidth='.2'/>
                                                <path strokeWidth='.05' stroke='black' d="M4.76,5.09H5a1,1,0,0,0,.7-.22A.7.7,0,0,0,6,4.32a.82.82,0,0,0-.22-.59.86.86,0,0,0-.65-.23,1,1,0,0,0-.65.23.78.78,0,0,0-.27.62H4.09a.84.84,0,0,1,.29-.7,1.07,1.07,0,0,1,.74-.27,1,1,0,0,1,.73.26.9.9,0,0,1,.28.7A.79.79,0,0,1,6,4.84a1.1,1.1,0,0,1-.48.32A1,1,0,0,1,6,5.47.83.83,0,0,1,6.2,6a.92.92,0,0,1-.29.73A1.1,1.1,0,0,1,5.14,7a1.24,1.24,0,0,1-.79-.27A.88.88,0,0,1,4,6h.12a.84.84,0,0,0,.29.65,1,1,0,0,0,.72.25,1,1,0,0,0,.69-.22A.82.82,0,0,0,6.07,6a.69.69,0,0,0-.28-.61A1.28,1.28,0,0,0,5,5.23H4.76Z"/>
                                            </svg>
                                            <text id='subtitleBold' style={{ fontSize: '2em', color: 'black', marginLeft: '.5em'}}>Find your keystones.</text>
                                        </div>
                                        <text style={{ fontSize: '1.35em', color: 'black', marginTop: '.5em'}}>
                                            Once those activities have been identified as “keystone activities,” you can begin to focus on forming healthy habits that matter most to you. 
                                        </text>
                                    </div>
                                </div>
                                <div style={{ gridArea: '1 / 10 / 21 / 21' }}>
                                    <img alt='screenshot' src={require('../assets/photos/screenshot.jpg')} style={{ width: '100%', height: '150%' }}/>
                                </div>
                            </div>
                        </div>

                        <div style={{ height: '5%', width: '100%', backgroundColor: 'white' }}/>

                        {/* INTEGRATIONS */}
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
                                <div id='subtitleBold' style={{ gridArea: ' 3 / 3 / 12 / 12', }}>
                                    <svg style={{ height: 12, width: 12, position: 'relative', bottom: '.9em', right: '1em' }}>
                                        <circle cx="6" cy="6" r="6" fill="white" />
                                    </svg>
                                    <text style={{ fontSize: '2.5em', lineHeight: '1em', color: 'white'}}>INTEGRATIONS</text>
                                </div>
                                <div className='titleText' style={{ gridArea: '3 / 6 / 11 / 10'}}>
                                    <HealthKitSVG scale={.75} style={{marginLeft: '3em'}}/>
                                </div>
                                <div className='titleText' style={{ gridArea: '4 / 14 / 7 / 19' }}>
                                    <text style={{ fontSize: '2.6em', color: 'white' }}>
                                        Apple HealthKit <br/>
                                    </text>
                                    <text id='subtitleThin' style={{ fontSize: '2.6em', color: 'white' }}>
                                        API
                                    </text>
                                </div>
                                <div style={{ gridArea: ' 7 / 14 / 20 / 19', }}>
                                    <text style={{ fontSize: '1.3em', color: 'white', lineHeight: '1.5em' }}>
                                        Keystone currently supports a handful of Apple HealthKit integrations. As you go about your day, Keystone can pull data from HealthKit to fine-tune your keystone activities.
                                    </text>
                                </div>
                            </div>
                        </div>

                        <div style={{ height: '5%', width: '100%', backgroundColor: 'white' }}/>

                        {/* TAGLINE */}
                        <div style={{ height: '100%', width: '100%', backgroundColor: globalStyle.colors.fireyRose }}>
                            <div 
                                style={{ 
                                    position: 'absolute', 
                                    width: '100%', 
                                    height: '100%', 
                                    display: 'grid', 
                                    gridTemplate: 'repeat(20, 1fr) / repeat(20, 1fr)' 
                                }}
                            >
                                <div style={{ gridArea: '4 / 3 / 8 / 10', flexDirection: 'column', display: 'flex'}}>
                                    <LineChart scale={.25} style={{marginLeft: '.25em'}}/>
                                    <text id='subtitleBold' style={{ fontSize: '1.5em', color: 'black', marginTop: '1em'}}>See your data.</text>
                                    <text style={{ fontSize: '1em', color: 'black', marginTop: '1em'}}>
                                        Track anything - habits, work sessions, moods - and Keystone will let you know what affects you the most. 
                                    </text>
                                </div>
                                <div style={{ gridArea: '9 / 3 / 13 / 10', flexDirection: 'column', display: 'flex'}}>
                                    <Calendar scale={.2} style={{marginLeft: '1em'}}/>
                                    <text id='subtitleBold' style={{ fontSize: '1.5em', color: 'black', marginTop: '1em'}}>Set reminders.</text>
                                    <text style={{ fontSize: '1em', color: 'black', marginTop: '1em'}}>
                                        Create as many custom activities as you'd like, set reminders to help keep you on track, and collect your data
                                    </text>
                                </div>
                                <div style={{ gridArea: '14 / 3 / 18 / 10', flexDirection: 'column', display: 'flex'}}>
                                    <SaveMoney scale={.25} style={{marginLeft: '.2em'}}/>
                                    <text id='subtitleBold' style={{ fontSize: '1.5em', color: 'black', marginTop: '1em'}}>Be happy.</text>
                                    <text style={{ fontSize: '1em', color: 'black', marginTop: '1em'}}>
                                        Everything Keystone has to offer is 100% free. Collect your data, find what matters most, and build a better life.                                    
                                    </text>
                                </div>
                                <div className='titleText' style={{ gridArea: '9 / 11 / 20 / 18' }}>
                                    <text style={{ fontSize: '5em', color: 'white' }}>
                                        Finally<br/>
                                        take control of your data <br/>
                                    </text>
                                    <text id='subtitleThin' style={{ fontSize: '4em', color: 'white' }}>
                                        with Keystone.
                                    </text>
                                </div>
                            </div>
                        </div>
                        
                        <div style={{ height: '5%', width: '100%', backgroundColor: 'white' }}/>

                        {/* DOWNLOAD */}
                        <div style={{ height: '45%', width: '100%', backgroundColor: globalStyle.colors.portfolioPurple }}>
                            <div 
                                style={{ 
                                    position: 'absolute', 
                                    width: '100%', 
                                    height: '45%', 
                                    display: 'grid', 
                                    gridTemplate: 'repeat(10, 1fr) / repeat(10, 1fr)' 
                                }}
                            >
                                <div className='titleText' style={{ gridArea: '3 / 3 / 10 / 6', }}>
                                    <text style={{ fontSize: '5em', color: 'white' }}>
                                        DOWN<br/>
                                        LOAD <br/>
                                    </text>
                                </div>
                                <div style={{ gridArea: '2 / 6 / 10 / 10' }}>
                                    <a href='https://itunes.apple.com/app/id1442522277'>
                                        <Lottie 
                                            options={{
                                                autoplay: false,
                                                loop: true,
                                                animationData: require('../assets/lottie/download.json')
                                            }}
                                            style={{
                                                height: '100%',
                                                width: '100%',
                                            }}
                                            isStopped={this.state.lottieStop}
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                    </div>
  

                </MainContainer>

                <VerticalMargin style={{gridArea: '2 / 3 / 2 / 3', ...mainContainers.vertical}}>
                </VerticalMargin>

                <HorizontalMargin style={{gridArea: '3 / 1 / 3 / 4', ...mainContainers.horizontal}}/>
            </header>
        </div>
      );
    }
}