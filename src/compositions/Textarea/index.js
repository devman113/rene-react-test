import React, { Component } from 'react';
import { Row, Col, Input } from 'antd';

const { TextArea } = Input;

class Textarea extends Component {
  state = { 
    value: ''
  }

  componentWillReceiveProps(props) {
    this.setState({ value: props.data.defaultValue });
  }

  onChangeInput = e => {
    this.setState({ value: e.target.value });
  }

  render() {
    const { value } = this.state;

    return <Row>
      <Col lg={10} xs={22} offset={1}>
        <TextArea 
          value={value}
          onChange={this.onChangeInput}
        />
      </Col>
    </Row>;
  }
}

export default Textarea;