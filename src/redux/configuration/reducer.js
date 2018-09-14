import actions from './actions';

const initState = {
  configurationList: {},
  dataSet: [],
};

export default function configurationReducer(state = initState, action) {
  switch (action.type) {
  case actions.CONFIGURATION_LIST_SUCCESS:
    return { configurationList: action.payload };
  case actions.DATASET_DETAILS_SUCCESS:
    return { dataSet: action.payload };
  default:
    return state;  
  }
}