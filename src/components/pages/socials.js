import React, { Component } from 'react';
import { FaMediumM as Medium, FaLinkedinIn as LinkedIn, FaGithub as GitHub } from 'react-icons/fa';

import globalStyle from '../../styles/globalStyle';

const iconSize = .9;

const iconStyle = {
    width: `${iconSize}rem`,
    height: `${iconSize}rem`,
    margin: '.4em',
    cursor: 'pointer'
};

export default class Socials extends Component{

    render() {
        return(
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly'
                }}
            >
                <a href='https://medium.com/@David_Figueroa'>
                    <Medium style={{...iconStyle, color: globalStyle.colors.keystoneBlack}}/>
                </a>
                <a href='https://github.com/dfigue92'>
                    <GitHub style={{...iconStyle, color: globalStyle.colors.keystoneBlack}}/>
                </a>
                <a href='https://linkedin.com/in/dfigue92/'>
                    <LinkedIn style={{...iconStyle, color: globalStyle.colors.keystoneBlack}}/>
                </a>
            </div>
        )
    }
}