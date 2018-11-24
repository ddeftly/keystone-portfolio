import React, { Component } from 'react';
import posed from 'react-pose';
import { tween } from 'popmotion';

const RotatingDiv = posed.div({
    neutral: { 
        transform: 'rotate(0deg)',
    },
    selected: { 
        transform: 'rotate(-90deg)',
    }
})

export class KeystoneOutline extends Component {
    state = {
        rotatePose: 'neutral'
    }

    rotateDiv = () => {
        let newPose;
        if (this.state.rotatePose === 'neutral') {
            newPose = 'selected'
        } else {
            newPose = 'neutral'
        }
        this.setState({ rotatePose: newPose })
    }

    render() {
        return(
            <RotatingDiv 
                onClick={this.props.onClick} 
                style={{ cursor: 'pointer', width: '5vh',  }} 
                pose={this.state.rotatePose} 
                onMouseEnter={() => {
                    this.rotateDiv()
                    this.props.extendMouseOver()
                }}
                onMouseLeave={() => {
                    this.rotateDiv()
                    this.props.extendMouseLeave()
                }}            
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 139.52 105.64" style={{ height: '100%', width: '100%',  ...this.props.style }}>
                    <g
                        style={{
                            fill: '#424242',
                            stroke: '#FFFFFF',
                            strokeWidth: 4
                        }}
                    >
                        <path class="cls-1" d="M158.59,71a3.71,3.71,0,0,1-3,1.76H78.73c-1.1,0-1.55.78-1,1.73l7.54,13.07c.55,1,1,1.74,1,1.74l1,1.73,19.66,34a3.85,3.85,0,0,1,0,3.47l-7.55,13.07a1.06,1.06,0,0,1-2,0L58.64,74.44l-1-1.73s-.46-.78-1-1.73L49.09,57.91c-.55-.95-.1-1.73,1-1.73H164.58a1.1,1.1,0,0,1,1,1.76Z" transform="translate(-38.24 -55.18)"/>
                        <path class="cls-2" d="M158.59,71a3.71,3.71,0,0,1-3,1.76H78.73c-1.1,0-1.55.78-1,1.73l7.54,13.07c.55,1,1,1.74,1,1.74l1,1.73,19.66,34a3.85,3.85,0,0,1,0,3.47l-7.55,13.07a1.06,1.06,0,0,1-2,0L58.64,74.44l-1-1.73s-.46-.78-1-1.73L49.09,57.91c-.55-.95-.1-1.73,1-1.73H164.58a1.1,1.1,0,0,1,1,1.76Z" transform="translate(-38.24 -55.18)"/>
                        <path class="cls-1" d="M146.68,89.25c1.1,0,1.55.78,1,1.73l-38.74,67.11a3.85,3.85,0,0,1-3,1.73H90.77a3.85,3.85,0,0,1-3-1.73L39.48,74.44c-.55-1-.1-1.73,1-1.73H55.64a3.85,3.85,0,0,1,3,1.73l38.75,67.12a1.06,1.06,0,0,0,2,0l7.55-13.07,2-3.47L128.6,91a3.85,3.85,0,0,1,3-1.73Z" transform="translate(-38.24 -55.18)"/>
                        <path class="cls-2" d="M146.68,89.25c1.1,0,1.55.78,1,1.73l-38.74,67.11a3.85,3.85,0,0,1-3,1.73H90.77a3.85,3.85,0,0,1-3-1.73L39.48,74.44c-.55-1-.1-1.73,1-1.73H55.64a3.85,3.85,0,0,1,3,1.73l38.75,67.12a1.06,1.06,0,0,0,2,0l7.55-13.07,2-3.47L128.6,91a3.85,3.85,0,0,1,3-1.73Z" transform="translate(-38.24 -55.18)"/>
                        <path class="cls-1" d="M175.52,72.71c1.1,0,1.55.78,1,1.73l-48.29,83.65a3.85,3.85,0,0,1-3,1.73H109.94c-1.1,0-1.55-.78-1-1.73L147.68,91c.55-1,.1-1.73-1-1.73H88.27a3.83,3.83,0,0,1-3-1.74L77.73,74.44c-.55-1-.1-1.73,1-1.73Z" transform="translate(-38.24 -55.18)"/><path class="cls-2" d="M175.52,72.71c1.1,0,1.55.78,1,1.73l-48.29,83.65a3.85,3.85,0,0,1-3,1.73H109.94c-1.1,0-1.55-.78-1-1.73L147.68,91c.55-1,.1-1.73-1-1.73H88.27a3.83,3.83,0,0,1-3-1.74L77.73,74.44c-.55-1-.1-1.73,1-1.73Z" transform="translate(-38.24 -55.18)"/>
                    </g>
                </svg>
            </RotatingDiv>
        )
    }
}

export class DFOutline extends Component {
    state = {
        rotatePose: 'neutral'
    }

    rotateDiv = () => {
        let newPose;
        if (this.state.rotatePose === 'neutral') {
            newPose = 'selected'
        } else {
            newPose = 'neutral'
        }
        this.setState({ rotatePose: newPose })
    }

    render() {
        return(
            <RotatingDiv 
                onClick={this.props.onClick} 
                style={{ cursor: 'pointer', width: '5vh' }} 
                pose={this.state.rotatePose} 
                onMouseEnter={() => {
                    this.rotateDiv()
                    this.props.extendMouseOver()
                }}
                onMouseLeave={() => {
                    this.rotateDiv()
                    this.props.extendMouseLeave()
                }}
            >   <svg viewBox="0 0 149.44 104" style={{ height: '90%', width: '90%', ...this.props.style }}>
                    <g id="Layer_2_copy_4" data-name="Layer 2 copy 4" fill='#424242'>
                        <path class="cls-1" d="M114.76,56V91.72l-.19,0c-.4-1-.76-2-1.2-3-.66-1.49-1.34-3-2.07-4.42a35.15,35.15,0,0,0-2-3.78c-1-1.61-2.21-3.17-3.41-4.68s-2.52-3.06-3.87-4.51a29.21,29.21,0,0,0-2.86-2.58c-1.27-1-2.56-2.09-3.9-3s-2.75-1.81-4.17-2.64-3-1.69-4.54-2.44a26.43,26.43,0,0,0-3.43-1.33c-2.29-.73-4.58-1.46-6.91-2.06a30.78,30.78,0,0,0-4.4-.7c-1.73-.18-3.48-.26-5.21-.4a1,1,0,0,1-.3-.13H35.18A6.61,6.61,0,0,0,35,57V159.91a4.84,4.84,0,0,0,.59.08c10.86,0,21.73,0,32.59-.07a49.47,49.47,0,0,0,7.64-1,26.66,26.66,0,0,0,4.39-1.12,40.68,40.68,0,0,0,7.25-2.95c1.54-.87,3.2-1.55,4.72-2.46s2.8-1.9,4.17-2.91c1.13-.82,2.24-1.68,3.29-2.6s2.07-1.92,3-2.94a43.59,43.59,0,0,0,6.16-7.9c1-1.65,2-3.3,2.81-5,1.07-2.18,2-4.42,3-6.67v35.57h16.59V122.77H168V107.66c0-1.25,0-1.25-1.24-1.25H131.37v-34h52l1.09,0V56Zm-14.28,54.9a24.8,24.8,0,0,1-1.37,7.26c-.53,1.29-.81,2.68-1.38,3.94a41.86,41.86,0,0,1-2.46,4.57,30,30,0,0,1-3,4.29,45.18,45.18,0,0,1-5,4.9,39.47,39.47,0,0,1-5.39,3.64,27,27,0,0,1-4.43,2A30.68,30.68,0,0,1,72.4,143a49.75,49.75,0,0,1-7.1.68c-4.29.11-8.58,0-12.87,0-.25,0-.49,0-.79,0V72.48a2.35,2.35,0,0,1,.42-.06c5.63,0,11.26,0,16.88.15A20.93,20.93,0,0,1,75.77,74c1.1.4,2.23.73,3.28,1.22a34,34,0,0,1,4.45,2.3,60.66,60.66,0,0,1,5.1,3.79,29.65,29.65,0,0,1,5.27,5.8A38.3,38.3,0,0,1,98.17,95a39,39,0,0,1,1.38,4.54A32.16,32.16,0,0,1,100.48,110.9Z" transform="translate(-35.04 -56)"/>
                    </g>
                </svg>
            </RotatingDiv>
        )
    }
}