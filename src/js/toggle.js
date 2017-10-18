import React, { Component } from 'react';
import { render } from 'react-dom';

import '../scss/toggle.scss'; // Import CSS

export default class Toggle extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: false
    };

    this.toggleCheckboxValue = this.toggleCheckboxValue.bind(this);
  }

  toggleCheckboxValue() {
    let bool = !this.state.value
    this.setState({
      value: bool
    });

    // Toggle class on body element as well
    document.body.classList = (bool === true) ? 'nite' : ''
  }

  render() {
    return (
      <div className="toggle-container">
        <div className="toggle">
          <input className="toggle-input" type="checkbox" onChange={this.toggleCheckboxValue} />
          <div className="toggle-bg"></div>
          <div className="toggle-switch">
            <div className="toggle-switch-craters"></div>
          </div>
          <div className="toggle-switch-cloud"></div>
          <div className="toggle-switch-stars"></div>
        </div>
      </div>
    );
  }

}
