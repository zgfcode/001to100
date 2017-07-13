import React, { Component } from 'react';
import logo from './logo.svg';
import redlogo from './redlogo.svg';
import './App.css';

class App extends Component {
  render() {
              return (
                        <div className="App">
                                  <div className="App-header">
                                    <img src={logo} className="App-logo" alt="logo" />
                                    <h2>Welcome to React</h2>
                                    <h3>Thanks, I am coming.</h3>
                                    <img src={redlogo} className="App-redlogo" alt='redlogo' />
                                  </div>

                                  <p className="App-intro">
                                    To get started, edit <code>src/App.js</code> and save to reload.
                                    <br/>
                                    And this line is a new line added by zgf.
                                    <br/>
                                    And the third line.
                                  </p>
                        </div>
                      );
            }
}

export default App;
