import React, { Component } from 'react';
import MainLayout from '../../layouts/main';

class App extends Component {
  render() {
    return (
      <MainLayout>
        <div className="App">
          <header className="App-header" />
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </MainLayout>
    );
  }
}

export default App;
