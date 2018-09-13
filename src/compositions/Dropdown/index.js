import React, { Component } from 'react';
import { Row, Col } from 'antd';
import SingleDropdown from './single-dropdown';
import MultiDropdown from './multi-dropdown';

class DropdownList extends Component {
  render() {
    const colClass = { marginTop: 10 };
    return <Row>
      <Col lg={10} xs={22} offset={1} style={colClass}><SingleDropdown data={this.props.data}/></Col>
      <Col lg={10} xs={22} offset={1} style={colClass}><MultiDropdown data={this.props.data} size='default' /></Col>
    </Row>;
  }
}

export default DropdownList;