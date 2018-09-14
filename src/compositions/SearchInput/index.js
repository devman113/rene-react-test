import React, { Component } from 'react';
import { Row, Col, Input } from 'antd';

const Search = Input.Search;

class SearchInput extends Component {
  render() {
    return <Row>
      <Col lg={22} xs={22} offset={1}>
        <Search
          placeholder="input search text"
          onSearch={value => this.props.onSearch(value)}
          enterButton
        />
      </Col>
    </Row>;
  }
}

export default SearchInput;