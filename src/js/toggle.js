import React, { Component } from 'react';
import { render } from 'react-dom';

import '../scss/toggle.scss'; // Import CSS

export default class Toggle extends Component {
  render() {
    return (
      <div className="toggle-container">
        <div className="toggle">
          <input className="toggle-input" type="checkbox" />
          <div className="toggle-bg"></div>
          <div className="toggle-switch"></div>
          <div className="toggle-switch-cloud"></div>
        </div>
      </div>
    );
  }
}
  // <div className="toggle-switch-figure"></div>
// <div className="toggle-switch-figureAlt"></div>
