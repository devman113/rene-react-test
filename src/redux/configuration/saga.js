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

export function* listRequest() {
  yield takeEvery('CONFIGURATION_LIST_REQUEST', function* () {
    const configurationData = yield getConfigurations();
    if (configurationData) {
      console.log('Successful fetched configuration list');
      yield put({
        type: actions.CONFIGURATION_LIST_SUCCESS,
        payload: configurationData.data
      });
    } else {
      console.log('Filed to fetch configuration list');
      yield put({
        type: actions.CONFIGURATION_LIST_ERROR,
      });
    }
  });
}

export default function* rootSaga() {
  yield all([
    fork(listRequest)
  ]);
}