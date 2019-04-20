import React, { Component } from 'react';
import OptionSelector from './components/OptionSelector';

class ArrayExplorer extends Component {
  render() {
    return (
      <div>
        <h1>
          JavaScript Array Explorer
        </h1>
        <OptionSelector />
      </div>
    );
  }
}

export default ArrayExplorer