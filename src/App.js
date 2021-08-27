import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      meaningOfLife: 47
    }
  }

  handleClick = () => {
    this.setState((prevState, prevProps) => {
      return {
        meaningOfLife: this.state.meaningOfLife + 1
      }
    }, () => console.log(this.state.meaningOfLife))

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.meaningOfLife}
          </p>
          <button onClick={this.handleClick}>update State</button>
        </header>
      </div>
    )
  }
}

/*unused class App2 for sample class code*/
class App2 extends React.Component {
  render() {
    return (
      <div><h1>Test</h1></div>
    )
  }
}

export default App;
