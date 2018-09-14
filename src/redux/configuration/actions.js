const configurationActions = {
  CONFIGURATION_LIST_REQUEST: 'CONFIGURATION_LIST_REQUEST',
  CONFIGURATION_LIST_SUCCESS: 'CONFIGURATION_LIST_SUCCESS',
  CONFIGURATION_LIST_ERROR: 'CONFIGURATION_LIST_ERROR',
  getList: () => ({
    type: configurationActions.CONFIGURATION_LIST_REQUEST,
  }),
  DATASET_DETAILS_REQUEST: 'DATASET_DETAILS_REQUEST',
  DATASET_DETAILS_SUCCESS: 'DATASET_DETAILS_SUCCESS',
  DATASET_DETAILS_ERROR: 'DATASET_DETAILS_ERROR',
  getDataset: payload => ({
    type: configurationActions.DATASET_DETAILS_REQUEST,
    payload
  })
};

export default configurationActions;