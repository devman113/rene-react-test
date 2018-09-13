import React, { Component } from 'react';
import { Input, Tooltip } from 'antd';

class EmailInput extends Component {
  onChange = (e) => {
    const { value } = e.target;
    const reg = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
    const isValid = reg.test(value);
    this.props.onChange(value, isValid);
  }

  // '.' at the end or only '-' in the input box.
  onBlur = () => {
    const { value, onBlur, onChange } = this.props;
    if (value.charAt(value.length - 1) === '.' || value === '-') {
      onChange({ value: value.slice(0, -1) });
    }
    if (onBlur) {
      onBlur();
    }
  }

  render() {
    const { value } = this.props;
    const title = value ? (
      <span className="email-input-title">
        {value}
      </span>
    ) : 'Input an email address';
    return (
      <Tooltip
        trigger={['focus']}
        title={title}
        placement="topLeft"
        overlayClassName="email-input"
      >
        <Input
          {...this.props}
          onChange={this.onChange}
          onBlur={this.onBlur}
          placeholder="Input an email address"
          maxLength="25"
        />
      </Tooltip>
    );
  }
}

class EmailInputDemo extends Component {
  state = {
    value: '',
    isValid: false
  }
  onChange = (value, isValid) => {
    console.log(value, isValid);
    this.setState({ value, isValid });
  }

  render() {
    const { value, isValid } = this.state;
    return <div>
      <EmailInput style={{ width: 200 }} value={value} onChange={this.onChange} />
      <span style={{ marginLeft: 10 }}>{ isValid ? 'valid email format' : 'invalid email format'}</span>
    </div>;
  }
}

export default EmailInputDemo;
