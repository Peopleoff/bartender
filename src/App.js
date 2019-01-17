import React, { Component } from 'react';
import Drinks from './components/Drinks';

class App extends Component {

  state = {
    drinks: [
      {
        id: 1,
        name: 'Gin & Tonic',
      },
      {
        id: 2,
        name: 'Vodka & Tonic',
      },
      {
        id: 3,
        name: 'Gin & Soda',
      },
    ]
  }
  render() {
    return (
      <div className="App">
      <Drinks drinks={this.state.drinks} />
      </div>
    );
  }
}

export default App;
