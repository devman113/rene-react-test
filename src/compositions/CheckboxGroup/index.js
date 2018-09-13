import React, { Component } from 'react';
import { Row, Col, Checkbox } from 'antd';

const CheckGroup = Checkbox.Group;

class CheckboxGroup extends Component {
  state = {
    value: null,
  }

  onChange(checkedValues) {
    console.log('checked = ', checkedValues);
  }

  render() {
    const { data } = this.props || {};

    return  <Row>
      <Col lg={10} xs={22} offset={1}>
        <CheckGroup options={data.options} onChange={this.onChange} />
      </Col>
    </Row>;
  }
}

export default CheckboxGroup;