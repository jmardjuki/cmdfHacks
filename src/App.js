import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import IconDisplay from './IconDisplay.js';
import ActionMenu from './ActionMenu.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      petImage: "sadnessPet",
      emotion: "sad"
    };
    this.changeImage = this.changeImage.bind(this);
  }

  changeImage() {
    this.setState({
      petImage: "happyPet",
      emotion: "happy"
    });
  }

  render() {
    return (
      <div className="App">
          <div className="row">
            <div class="col">
              <ActionMenu
                value={5}
              />
            </div>
            <div class="col-8">
                <div className={this.state.petImage} onClick={this.changeImage} />
            </div>
            <div class="col">
              <IconDisplay 
                content={"Affection"}
                emotion={this.state.emotion}
              />
            </div>
          </div>
      </div>
    );
  }
}

export default App;
