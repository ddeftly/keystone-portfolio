const colors = {
    portfolioGray: '#CCCCCC',
    keystoneBlack: '#424242',
    jetBlack: '#333333',
    electricBlue: '#00E5D2',
    fireyRose: '#EE596C'
}

export const appHeader = {
    display: 'grid',
    gridTemplate: '5vh 1fr 5vh / 5vh 1fr 5vh',
    alignItems: 'center',
    minHeight: '100vh',
    margin: 0,
    padding: 0
}

const globalStyle = {
    colors: { ...colors }
}

export default globalStyle;