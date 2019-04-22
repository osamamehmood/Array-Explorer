import React, { Component } from 'react';
import Select from 'react-select';

const options = [
  {
    label: 'Add items to others arrays',
    value: 'Add items to others arrays',
  },
  {
    label: 'Remove items',
    value: 'Remove items',
  },
  {
    label: 'Find items',
    value: 'Find items',
  },
  {
    label: 'Walk over items',
    value: 'Walk over items',
  },
  {
    label: 'Return a string',
    value: 'Return a string',
  },
  {
    label: 'Order an array',
    value: 'Order an array',
  },
  {
    label: 'Something else',
    value: 'Something else',
  },
]

const optionForAddingItems = [
  {
    label: 'Add element(s) to an array',
    value: 'Add element(s) to an array',
  },
  {
    label: 'Elements to the end of an array',
    value: 'Elements to the end of an array',
  },
  {
    label: 'Elements to the front of an array',
    value: 'Elements to the front of an array',
  },
  {
    label: 'this array to other array(s) and/or value(s)',
    value: 'Walk over items',
  },
]


class OptionSelector extends Component {
  state = {
    selectedOption : '',
    showOptionsForAddingItems: false
  }

  handleChange = e => {
    let selectedOption = e;
    this.setState({
      selectedOption: selectedOption.value,
    })
  }

  render(){
    return (
      <div>
        <h1> JavaScript Array Explorer </h1>
        <p>I have an array, I would like to</p>
        <div style={{width: '300px'}}>
          <Select
            options={options}
            onChange={this.handleChange}
          />
          { this.state.selectedOption === 'Add items to others arrays' ?
          (
            <div>
              <p> I need to add </p>
              <Select
                options={optionForAddingItems}
                onChange={this.handleChange}
              />
            </div>
          )
            : ''
          }
        </div>
      </div>
    );
  }
};

export default OptionSelector;
