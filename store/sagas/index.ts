import { all, fork } from 'redux-saga/effects';
import articleSaga from './articleSaga';
import destinationSaga from './destinationSaga';

export default function* rootSaga() {
  yield all([fork(articleSaga), fork(destinationSaga)]);
}
