import React, { Component } from 'react';
import { render } from 'react-dom';
import Toggle from './toggle';

import '../scss/main.scss'; // Import CSS
import mockImg from '../assets/switch_02.gif';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>React Day/Nite Toggle</h1>

        <div className="examples">
          <div className="example example-fake">
            <img src={ mockImg } alt='Yep, This is a mock only' />
          </div>
          <div className="example example-toggle">
            <Toggle />
          </div>
        </div>
        <div className="example-credits">
          <a href="https://dribbble.com/shots/1909289-Day-Night-Toggle-Button-GIF" target="_blank">Tsuriel on Dribbble</a>
          <a href="https://github.com/TrevorJTClarke" target="_blank">React Component by TrevorJTClarke</a>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
