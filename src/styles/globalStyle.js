const colors = {
    portfolioGray: '#CCCCCC',
    keystoneBlack: '#424242',
    jetBlack: '#333333',
    electricBlue: '#00E5D2',
    fireyRose: '#EE596C'
}

export const homeHeader = {
    display: 'grid',
    gridTemplate: '7vh 1fr 7vh / 7vh 1fr 7vh',
    alignItems: 'center',
    minHeight: '100vh',
    maxWidth: '100vw',
    margin: 0,
    padding: 0
}

const globalStyle = {
    colors: { ...colors }
}

export default globalStyle;