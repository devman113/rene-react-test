import React, { Component } from 'react';
import { Row, Col } from 'antd';
import SingleDropdown from './single-dropdown';
import MultiDropdown from './multi-dropdown';

class DropdownList extends Component {

  render() {
    return <Row>
      <Col lg={10} xs={22} offset={1}><SingleDropdown data={this.props.data}/></Col>
      <Col lg={10} xs={22} offset={1}><MultiDropdown data={this.props.data} size='default' /></Col>
    </Row>;
  }
}

export default DropdownList;