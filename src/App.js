import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from './pages/home';

class App extends Component {
  state = {
    selection: 'neutral'
  }

  switchContainer = () => {
    if (this.state.selection === 'neutral') {
      this.setState({ selection: 'selected' })
    } else {
      this.setState({ selection: 'neutral' })
    }
  }

  render() {
    return (
      <div className="App">
        <Home/>
      </div>
    );
  }
}

export default App;
