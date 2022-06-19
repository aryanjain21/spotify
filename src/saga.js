import { takeLatest } from 'redux-saga/effects';

import { handleGetUser } from './containers/login/redux/handler';
import { TYPE } from './containers/login/redux/type';

export function* watcherSaga() {
    yield takeLatest(TYPE.GET_USER, handleGetUser)
}