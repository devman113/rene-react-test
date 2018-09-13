import React, { Component } from 'react';
import { Row, Col, Input } from 'antd';
import BasicInput from './basic-input';
import NumberInputDemo from './number-input';
import EmailInputDemo from './email-input';

const colClass = { marginTop: 10 };

class TextFieldGroup extends Component {
  state = {
    inputValue: ''
  }

  onChangeInput = (e) => {
    this.setState({ inputValue: e.target.value });
  }

  render() {
    const { data } = this.props || {};
    return <Row>
      <Col lg={22} xs={22} offset={1} style={colClass}>
        <Input 
          defaultValue={data.defaultValue}
          size={data.size}
        />
      </Col>
      <Col lg={10} xs={22} offset={1} style={colClass}>
        <BasicInput 
          value={this.state.inputValue}
          onChangeInput={this.onChangeInput}
        />
      </Col>
      <Col lg={10} xs={22} offset={1} style={colClass}>
        <BasicInput 
          value={this.state.inputValue}
          onChangeInput={this.onChangeInput}
        />
      </Col>
      <Col lg={10} xs={22} offset={1} style={colClass}>
        <NumberInputDemo />
      </Col>
      <Col lg={10} xs={22} offset={1} style={colClass}>
        <EmailInputDemo />
      </Col>
    </Row>;
  }
}

export default TextFieldGroup;