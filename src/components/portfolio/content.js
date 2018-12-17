import React, { Component } from 'react';

import { MainContainer, PageInnerContainer, HorizontalMargin, VerticalMargin } from '../../components/misc/containers';

import { mainContainers } from '../../styles/misc/containerStyles';
import globalStyle, { homeHeader } from '../../styles/globalStyle';

export class Code extends Component {

    render() {
        return(
            <div 
                style={{
                    ...homeHeader
                }}
            >
                <HorizontalMargin id='subname' style={{gridArea: '1 / 2 / 1 / 2', ...mainContainers.horizontal}}/>

                <VerticalMargin style={{gridArea: '2 / 1 / 2 / 1', ...mainContainers.vertical}}/>

                <MainContainer style={{gridArea: '2 / 2 / 2 / 2', backgroundColor: globalStyle.colors.keystoneBlack}}>

                </MainContainer>

                <VerticalMargin style={{gridArea: '2 / 3 / 2 / 3', ...mainContainers.vertical}}/>

                <HorizontalMargin style={{gridArea: '3 / 1 / 3 / 4', ...mainContainers.horizontal}}/>
            </div>
        )
    }
}