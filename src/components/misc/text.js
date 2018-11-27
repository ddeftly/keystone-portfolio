import React, { Component } from 'react';

import styled from 'styled-components';
import posed from 'react-pose';
import { tween } from 'popmotion';

export const Header = styled.text`
    color: white; 
`;

export const HeaderText = posed(Header)({
    unselected: { 
        x: (props) => props.unselected.xPosition,
        opacity: (props) => props.unselected.opacity,
        transition: (props) => tween({...props, duration: 1000}) 
    },
    partUnselected: {
        x: (props) => props.partUnselected.xPosition,
        opacity: (props) => props.partUnselected.opacity,
        transition: (props) => tween({...props, duration: 1000})  
    },
    neutral: { 
        x: (props) => props.neutral.xPosition,
        opacity: (props) => props.neutral.opacity,
        transition: (props) => tween({...props, duration: 1000})  
    },
    partSelected: {
        x: (props) => props.partSelected.xPosition,
        opacity: (props) => props.partSelected.opacity,
        transition: (props) => tween({...props, duration: 1000})  
    },
    selected: { 
        x: (props) => props.selected.xPosition,
        opacity: (props) => props.selected.opacity,
        transition: (props) => tween({...props, duration: 1000})  
    },
})

const Menu = styled.text`
    font-size: 2em;
    color: black;
`;

const MenuT = posed(Menu)({
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

export const MenuText = (props) => (
    <div style={{ width: '50%', ...props.style }}>
        <MenuT pose={props.pose}>
            {props.children}
        </MenuT>
    </div>
)