import React, { Component } from 'react';
import Image from 'react-image-resizer';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
      </div>
    );
  }
}

class Header extends React.Component {
   render() {
      return (
         <div>
            <img src="TQlogo.png" alt="Logo"
              height={100}
              width={400}/>
         </div>
      );
   }
}

export default App;
