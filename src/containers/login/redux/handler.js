import { call, put } from 'redux-saga/effects';
import { setUser } from './reducer';
import { requestGetUser } from './action';

export function* handleGetUser() {
    try {
        const response = yield call(requestGetUser);
        const { data } = response;
        yield put(setUser(data))
    } catch (error) {
        console.error('error>>>>', error)
    }
}