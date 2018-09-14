import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Divider, Row } from 'antd';
import configurationActions from '../../redux/configuration/actions';
import DropdownList from '../../compositions/Dropdown';
import TextFieldGroup from '../../compositions/Textfield';
import Textarea from '../../compositions/Textarea';
import RadioGroup from '../../compositions/RadioGroup';
import CheckboxGroup from '../../compositions/CheckboxGroup';
import FileUpload from '../../compositions/FileUpload';
import SearchInput from '../../compositions/SearchInput';
import DatasetList from '../../compositions/DatasetList';

const { getList, getDataset } = configurationActions;

class ConfigurationList extends Component {
 state = {
   search: ''
 }

 componentWillMount() {
   const { getList } = this.props;
   getList();
 }

 onSearch = value => {
   const { getDataset } = this.props;
   getDataset(value);
 }

 render() {
   const { data } = this.props.configurationList || {};
   const { dataSet } = this.props;

   return (
     <Row>
       <Divider>Dropdowns</Divider>
       <DropdownList data={data ? data.dropdown : {}} />
       <Divider>Textfields</Divider>
       <TextFieldGroup data={data ? data.textfield : {}} />
       <Divider>Textarea</Divider>
       <Textarea data={data ? data.textarea : {}} />
       <Divider>Radiobox</Divider>
       <RadioGroup data={data ? data.radiobox : {}} />
       <Divider>Checkbox</Divider>
       <CheckboxGroup data={data ? data.checkbox : {}} />
       <Divider>Search Input</Divider>
       <SearchInput onSearch={this.onSearch} />
       <DatasetList dataSet={dataSet} />
       <Divider>File Upload</Divider>
       <FileUpload />
     </Row>
   );
 }
}

ConfigurationList.propTypes = {
  configurationList: PropTypes.object,
  dataSet: PropTypes.array,
};

export default connect(
  state => ({
    configurationList: state.Configuration.configurationList,
    dataSet: state.Configuration.dataSet
  }),
  { getList, getDataset }
)(ConfigurationList);