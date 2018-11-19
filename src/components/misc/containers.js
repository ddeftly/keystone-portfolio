import styled from 'styled-components';
import posed from 'react-pose';

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
    display: flex;
    flex-direction: column;
    justifyContent: 'center';
    alignItems: 'center';
`;

export const HorizontalMargin = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justifyContent: 'center';
    alignItems: 'center';
`;

// Posed Components

const Box = posed.div({
    unselected: { width: '0%' },
    neutral: { width: '50%' },
    selected: { width: '100%' }
})

export const InnerContainer = styled(Box)`
    height: 100%;
    background: ${props => props.backgroundColor}
`;