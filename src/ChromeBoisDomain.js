import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (e) => {
    return (drawChromeBoiAtCoords(e.clientX, e.clientY))
  }
  

  handleKeyPress = (e) => {
    if (e.key === 'a') {
      return resize('+')
    } else if (e.key === 's') {
      return resize('-')
    }
  }

  
  render() {
    return (
      <canvas 
        onMouseMove={this.handleMouseMove}
        onClick={() => {toggleCycling()}}
        onKeyPress={this.handleKeyPress}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
