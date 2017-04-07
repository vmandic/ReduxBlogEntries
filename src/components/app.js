import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div className="app-container">
        <h6>React Posts App</h6>
        { this.props.children }
      </div>
    );
  }
}
