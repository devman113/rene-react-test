import React, { Component } from 'react';
import { Input } from 'antd';

class BasicInput extends Component {
  render() {
    const { value } = this.props || {};
    return <Input placeholder="Basic usage" value={value} onChange={this.props.onChangeInput} />;
  }
}

export default BasicInput;