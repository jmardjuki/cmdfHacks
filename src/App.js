import React, { Component } from 'react';
import logo from './images/neutral.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import IconDisplay from './IconDisplay.js';
import ActionMenu from './ActionMenu.js';

class App extends Component {

  render() {
    return (
      <div className="App">
          <div class="row">
            <div class="col-2">
              <ActionMenu
                value={5}
              />
            </div>
            <div class="col-8">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
              </header>
            </div>
            <div class="col-2">
              <IconDisplay 
                content={"Affection"}
                emotion={"Happy"}
              />
            </div>
          </div>
      </div>
    );
  }
}

export default App;
