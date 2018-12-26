import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Buttons from './components/Buttons';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <header className="App-header">

          <div className="MainContent">
          <p>
          </p>

          </div>
            <Buttons/>


        </header>
      <Footer className="Footer"/>
      </div>
    );
  }
}

export default App;
