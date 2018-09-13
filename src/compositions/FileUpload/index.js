import React, { Component } from 'react';
import { Row, Col, Checkbox, Upload, Icon, message } from 'antd';

const Dragger = Upload.Dragger;

class FileUpload extends Component {
  state = {
    value: null,
    isShown: true
  }

  onChange(checkedValues) {
    console.log('checked = ', checkedValues);
  }

  toggleView = e => {
    this.setState({ isShown: !this.state.isShown });
  }

  render() {
    const { data } = this.props || {};
    const { isShown } = this.state;
    const props = {
      name: 'file',
      multiple: true,
      action: '//jsonplaceholder.typicode.com/posts/',
      onChange(info) {
        const status = info.file.status;
        if (status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (status === 'done') {
          message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
          message.error(`${info.file.name} file upload failed.`);
        }
      },
    };
    
    return  <Row>
      <Col lg={10} xs={22} offset={1}>
        <Checkbox 
          checked={isShown}
          onChange={this.toggleView}
        >
          Toggle view
        </Checkbox>
        <br />
        <br />
        {
          isShown && (
            <Dragger {...props}>
              <p className="ant-upload-drag-icon">
                <Icon type="inbox" />
              </p>
              <p className="ant-upload-text">Click or drag file to this area to upload</p>
              <p className="ant-upload-hint">Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
            </Dragger>
          )
        }
      </Col>
    </Row>;
  }
}

export default FileUpload;