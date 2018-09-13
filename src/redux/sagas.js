import { all } from 'redux-saga/effects';
import configurationSagas from './configuration/saga';

export default function* rootSaga(getState) {
  yield all([
    configurationSagas()
  ]);
}