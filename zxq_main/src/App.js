import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Background from './component/Background';
import { drawSvgWithChild } from './common/svgOp';
import { svgImg } from './common/config';

class App extends Component {

  render() {
    //const logo = drawSvgWithChild(svgImg.logo, '200px', '25px', '0 0 405 50')
    return (
      <Background>
        <div className='rightuppercorner'>
          <div>Blog</div>
          <div>Tools</div>
          <div>Creations</div>
        </div>
        <div className='slogn'>
          <div className='slogn_first'>Do you know?</div>
          <div>The days you are by my side</div>
          <div>is the most treasures in the world.</div>
        </div>
      </Background>
    );
  }
}

export default App;
