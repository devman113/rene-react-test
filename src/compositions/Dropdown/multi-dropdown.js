import React, { Component } from 'react';
import { Select } from 'antd';

const Option = Select.Option;

class MultiDropdown extends React.Component {

  handleChange(value) {
    console.log(`Selected: ${value}`);
  }
  

  render() {
    const { size, data } = this.props || {};
    return (
      <div>
        <Select
          mode="multiple"
          size={size}
          placeholder="Please select"
          onChange={this.handleChange}
          style={{ width: '100%' }}
        >
          {
            data.values && data.values.map((element, index) => 
              <Option value={element} key={index}>{data.labels[index]}</Option>
            )
          }
        </Select>
      </div>
    );
  }
}

export default MultiDropdown;