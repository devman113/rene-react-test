import React, { Component } from 'react';
import { Select } from 'antd';
const Option = Select.Option;

class SingleDropdown extends Component {

  handleChange(value) {
    console.log(`selected ${value}`);
  }

  handleBlur() {
    console.log('blur');
  }

  handleFocus() {
    console.log('focus');
  }

  render() {
    const { data } = this.props || {};
    console.log(data);
    return <Select
      showSearch
      style={{ width: '100%' }}
      placeholder="Select a person"
      optionFilterProp="children"
      onChange={this.handleChange}
      onFocus={this.handleFocus}
      onBlur={this.handleBlur}
      filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
    >
      {
        data.values && data.values.map((element, index) => 
          <Option value={element} key={index}>{data.labels[index]}</Option>
        )
      }
    </Select>;
  }
}

export default SingleDropdown;