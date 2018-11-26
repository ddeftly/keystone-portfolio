import React, { Component } from 'react';

import styled from 'styled-components';
import posed from 'react-pose';
import { tween } from 'popmotion';

const Header = styled.text`
    font-size: 10em;
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
    },
    neutral: { 
        x: (props) => props.neutral.xPosition,
        opacity: (props) => props.neutral.opacity,
        transition: (props) => tween({...props, duration: 1000})  
    },
    partSelected: {
        x: (props) => props.partSelected.xPosition,
        opacity: (props) => props.partSelected.opacity,
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

export const MenuText = posed(Menu)({
    unselected: {
        opacity: 0,
        x: '0%'
    }, 
    selected: {
        opacity: 1
    }
}) 