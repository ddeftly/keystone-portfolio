import styled from 'styled-components';
import posed from 'react-pose';
import { tween } from 'popmotion';

import globalStyle from '../../styles/globalStyle';

export const MainContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row
`;

export const VerticalMargin = styled.div`
    height: 100%;
    width: 100%;
`;

export const HorizontalMargin = styled.div`
    height: 100%;
    width: 100%;
`;

/// Posed Components
//HOME
const Box = posed.div({
    unselected: { 
        width: '0%',
    },
    partUnselected: {
        width: '10%',
    },
    neutral: { 
        width: '50%',
        transition: (props) => tween({...props, duration: 1000})  
    },
    partSelected: {
        width: '90%',
    },
    selected: { 
        width: '100%',
        transition: (props) => tween({...props, duration: 1000})  
    },
})

export const HomeInnerContainer = styled(Box)`
    height: 100%;
    background: ${props => props.backgroundColor};
    justifyContent: 'flex-end';
    alignItems: 'flex-end';
`;

// PAGE
const Box2 = posed.div({
    selected: {
        width: '20%'
    },
    unselected: {
        width: '0%'
    }
})

export const PageInnerContainer = styled(Box2)`
    height: 100%;
    background: ${props => props.backgroundColor};
    justifyContent: 'flex-end';
    alignItems: 'flex-end';
    position: 'absolute'
`;