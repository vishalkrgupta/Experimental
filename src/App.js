import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import React from 'react';

// class App extends React.Component {
//   state = {
//       meaningOfLife: 47
//     }
  
//   handleClick = () => {
//     this.setState((prevState, prevProps) => {
//       return {
//         meaningOfLife: prevState.meaningOfLife + 1
//       }
//     }, () => console.log(this.state.meaningOfLife))
//   }

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      meaningOfLife: 47+ this.props.increment
    }
  }



  handleClick = () => {
    this.setState((prevState, prevProps) => {
      return {
        meaningOfLife: prevState.meaningOfLife + prevProps.increment
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
