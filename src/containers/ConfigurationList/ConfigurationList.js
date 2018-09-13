import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import configurationActions from '../../redux/configuration/actions';

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
   console.log('Configuration Data', this.props.configurationList);
   return (
     <div>ConfigurationList Page</div>
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