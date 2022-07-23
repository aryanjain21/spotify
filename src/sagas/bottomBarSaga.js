import { all, takeLatest } from "redux-saga/effects";

import { getCurrentTrack, updatePlayerState } from "../containers/bottomBar/redux/action";
import { TYPE } from "../containers/bottomBar/redux/type";

function* geCurrentTrack() {
    yield takeLatest(TYPE.GET_CURRENTLY_PLAY_TRACK, getCurrentTrack);
}

function* updatePlayPause() {
    console.error("updatePlayPause>>>");
    yield takeLatest(TYPE.UPDATE_PLAYER_TRACK_STATE, updatePlayerState);
}

export function* bottomBarSaga() {
    console.error("bottomBarSaga>>>");
    yield all([
        geCurrentTrack(),
        updatePlayPause(),
    ]);
}
