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

// Posed Components

const Box = posed.div({
    unselected: { 
        width: '0%',
        transition: (props) => tween({...props, duration: 1000}) 
    },
    neutral: { 
        width: '50%',
        transition: (props) => tween({...props, duration: 1000})  
    },
    selected: { 
        width: '100%',
        transition: (props) => tween({...props, duration: 1000})  
    }
})

export const InnerContainer = styled(Box)`
    height: 100%;
    background: ${props => props.backgroundColor}
`;