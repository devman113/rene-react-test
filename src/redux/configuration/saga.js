import { all, takeEvery, put, fork } from 'redux-saga/effects';
import axios from 'axios';
import actions from './actions';

const getConfigurations = async () => {
  try {
    return await axios.get('http://localhost:4000/api/configuration');
  } catch (error) {
    console.error(error);
  }
};

const getDateset = async (search) => {
  try {
    return await axios.post('http://localhost:4000/api/dataset', { search: search });
  } catch (error) {
    console.error(error);
  }
};

export function* listRequest() {
  yield takeEvery('CONFIGURATION_LIST_REQUEST', function* () {
    const configurationData = yield getConfigurations();
    if (configurationData) {
      console.log('Successfully fetched configuration list');
      yield put({
        type: actions.CONFIGURATION_LIST_SUCCESS,
        payload: configurationData.data
      });
    } else {
      console.log('Failed to fetch configuration list');
      yield put({
        type: actions.CONFIGURATION_LIST_ERROR,
      });
    }
  });
}

export function* datasetRequest() {
  yield takeEvery('DATASET_DETAILS_REQUEST', function* ({ payload }) {
    const dataSet = yield getDateset(payload);
    if (dataSet) {
      console.log('Successfully fetched data set', dataSet.data);
      yield put({
        type: actions.DATASET_DETAILS_SUCCESS,
        payload: dataSet.data
      });
    } else {
      console.log('Failed to fetch data set');
      yield put({
        type: actions.DATASET_DETAILS_ERROR,
      });
    }
  });
}

export default function* rootSaga() {
  yield all([
    fork(listRequest),
    fork(datasetRequest)
  ]);
}