import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


class OptionSelector extends Component {
  state = {
    selectedOption : ""
  }

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({
      selectedOption : e.target.value
    });
  }

  render() {
    return (
      <div>
        <div> I have an array, I would like to
          <FormControl>
            <Select
              value={this.state.selectedOption}
              onChange={ e =>
                {this.setState ({
                  selectedOption : e.target.value
                })}
              }
            >
              <MenuItem value={10}>Add items or other arrays</MenuItem>
              <MenuItem value={20}>Remove Items(s)</MenuItem>
              <MenuItem value={20}>Find Items(s)</MenuItem>
              <MenuItem value={30}>Walk over items</MenuItem>
              <MenuItem value={30}>Return a string</MenuItem>
              <MenuItem value={30}>Order an array</MenuItem>
              <MenuItem value={30}>Something else</MenuItem>
          </Select>
          </FormControl>
        </div>

      </div>
    );
  }
}

export default OptionSelector