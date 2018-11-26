import React, { Component } from 'react';
import pose from 'react-pose';
import { tween } from 'popmotion';
import { IoIosMenu as Menu, IoIosRemove as Line } from 'react-icons/io';

const yScale = 1.5;

const AniDiv = pose.div({
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