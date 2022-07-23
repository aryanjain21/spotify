import { all } from "redux-saga/effects";

import { bottomBarSaga } from './bottomBarSaga';
import { loginSaga } from "./loginSaga";

export default function* rootSaga() {
  console.error("rootSaga>>>");
  yield all([
    loginSaga(),
    bottomBarSaga()
  ]);
}
