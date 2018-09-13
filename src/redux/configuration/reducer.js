import actions from './actions';

const initState = {
  configurationList: {}
};

export default function configurationReducer(state = initState, action) {
  switch (action.type) {
  case actions.CONFIGURATION_LIST_SUCCESS:
    return { configurationList: action.payload };
  default:
    return state;  
  }
}