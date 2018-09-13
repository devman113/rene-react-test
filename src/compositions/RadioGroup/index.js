import React, { Component } from 'react';
import { Row, Col, Radio } from 'antd';

const RadioGroup = Radio.Group;

class RadioboxGroup extends Component {
  state = {
    value: null,
  }

  onChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  }

  render() {
    const { data } = this.props || {};

    return  <Row>
      <Col lg={10} xs={22} offset={1}>
        <RadioGroup onChange={this.onChange} value={this.state.value}>
          {
            data.values && data.values.map((element, index) => 
              <Radio value={element} key={index}>{data.labels[index]}</Radio>
            )
          }
        </RadioGroup>
      </Col>
    </Row>;
  }
}

export default RadioboxGroup;