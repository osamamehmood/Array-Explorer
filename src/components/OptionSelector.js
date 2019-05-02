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

const optionForAddingItemsToArray = [
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
    firstSelectedOption : '',
    secondSelectedOption : '',
    showOptionsForAddingItemsToArray: false
  }

  selectFirstOption = e => {
    let selectedOption = e;
    this.setState({
      firstSelectedOption: selectedOption.value,
    })

    if (selectedOption.value === 'Add items to others arrays') {
      this.setState({
        showOptionsForAddingItemsToArray: true
      });
    } else {
        this.setState({
          showOptionsForAddingItemsToArray: false
        });
    }

  }

  selectSecondOption = e => {
    let selectedOption = e;
    this.setState({
      secondSelectedOption: selectedOption.value,
    })
  }

  render(){
    console.log(this.state.secondSelectedOption)
    return (
      <div>
        <h1> JavaScript Array Explorer </h1>
        <p>I have an array, I would like to</p>

        <div style={{width: '300px'}}>
          <Select
            options={options}
            onChange={this.selectFirstOption}
          />
          { this.state.showOptionsForAddingItemsToArray ?
          (
            <div>
              <p> I need to add </p>
              <Select
                options={optionForAddingItemsToArray}
                onChange={this.selectSecondOption}
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
