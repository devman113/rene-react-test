import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Divider, Row } from 'antd';
import configurationActions from '../../redux/configuration/actions';
import DropdownList from '../../compositions/Dropdown';

const { getList } = configurationActions;

class ConfigurationList extends Component {
 state = {
   search: ''
 }

 componentWillMount() {
   const { getList } = this.props;
   getList();
 }
 render() {
   const { data } = this.props.configurationList || {};

   return (
     <Row>
       <Divider>Dropdowns</Divider>
       <DropdownList data={data ? data.dropdown: {}} />
     </Row>
   );
 }
}

ConfigurationList.propTypes = {
  configurationList: PropTypes.object,
};

export default connect(
  state => ({
    configurationList: state.Configuration.configurationList
  }),
  { getList }
)(ConfigurationList);