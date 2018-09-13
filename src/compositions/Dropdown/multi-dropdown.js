import React, { Component } from 'react';
import { Select } from 'antd';

const Option = Select.Option;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

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