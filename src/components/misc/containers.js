import styled from 'styled-components';

import globalStyle from '../../styles/globalStyle';

export const MainContainer = styled.div`
    height: 90vh;
    width: 90vw;
    display: grid;
    grid-template: 1fr / 1fr 1fr
`;

export const InnerContainer = styled.div`
    height: 100%;
    width: 100%;
    background: ${props => props.backgroundColor}
`;