import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>React Koa practice</h1>
        {this.props.children}
      </div>
    )
  }
}
