import { all, takeLatest } from "redux-saga/effects";

import { handleGetUser } from "../containers/login/redux/handler";
import { TYPE } from "../containers/login/redux/type";

function* getUserData() {
  yield takeLatest(TYPE.GET_USER, handleGetUser);
}

export function* loginSaga() {
  yield all([getUserData()]);
}
