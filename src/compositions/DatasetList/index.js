import React, { Component } from 'react';
import { Row, Col, List } from 'antd';

class DatasetList extends Component {
  render() {
    const { dataSet } = this.props || {};

    return  <Row>
      <Col lg={22} xs={22} offset={1}>
        <br />
        <List
          size="medium"
          bordered
          dataSource={dataSet}
          renderItem={item => (<List.Item>{item}</List.Item>)}
        />
        <br />
        <br />
      </Col>
    </Row>;
  }
}

export default DatasetList;