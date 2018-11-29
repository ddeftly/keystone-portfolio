import React, { Component } from 'react';
import posed from 'react-pose';
import { tween } from 'popmotion';
import MDButton from '@material-ui/core/Button';
import { IoIosMenu as Menu, IoIosRemove as Line } from 'react-icons/io';

import globalStyle from '../../styles/globalStyle';

const yScale = 1;

const AniDiv = posed.div({
    unselected: {
        y: 0,
        transition: (props) => tween({...props, duration: 250}) 
    },
    selected: {
        y: (props) => props.ySelected,
        transition: (props) => tween({...props, duration: 250}) 
    }
})

const AniLine = (props) => (
    <AniDiv 
        pose={props.pose} ySelected={props.ySelected}
        style={{
            height: `${yScale * .5}em`,
        }}
    >
        <Line style={{ width: `${yScale * 1.5}em`, height: `${yScale * 1.5}em`, }}/>
    </AniDiv>
)

export default class AnimatedMenu extends Component {
    state = {
        selection: 'unselected'
    }

    onClick = () => {
        if (this.state.selection === 'unselected') {
            this.setState({ selection: 'selected' })
        } else {
            this.setState({ selection: 'unselected' })
        }
        this.props.onClick()
    }
    
    render() {
        return(
            <div
                onClick={this.onClick}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                    height: '4em',
                    alignSelf: 'center',
                    ...this.props.style
                }}
            >
                <AniLine pose={this.state.selection} ySelected={`${yScale * .5}em`}/>
                <AniLine pose={this.state.selection}/>
                <AniLine pose={this.state.selection} ySelected={`${yScale * -.5}em`}/>
            </div>
        )
    }
}

const MenuBox = posed.div({
    unselected: {
        opacity: 0,
        x: '0%',
        transition: (props) => tween({...props, duration: 100})  
    }, 
    selected: {
        opacity: 1,
        x: '20%',
        transition: (props) => tween({...props, duration: 1000})  
    }
})

export class MenuItem extends Component {

    render() {
        return(
            <MenuBox pose={'selected'}>
                <MDButton 
                    onClick={this.props.onClick}
                    variant='flat'
                    style={{
                        textAlign: 'left', 
                        width: '8em', 
                        justifyContent: 'flex-start', 
                        paddingLeft: 0,
                        backgroundColor: this.props.backgroundColor
                    }}
                >
                    <text style={{fontSize: '2em', color: 'black',}}>
                        {this.props.children}
                    </text>
                </MDButton>
            </MenuBox>
        )
    }
}