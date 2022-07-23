import { all, call, put } from "redux-saga/effects";

import { fetchCurrentTrack, pauseState, playerVolume } from "../../../services";

import { TYPE } from "./type";

export const getCurrentPlay = () => ({
    type: TYPE.GET_CURRENTLY_PLAY_TRACK,
});

export const setCurrentTrack = (track) => ({
    type: TYPE.SET_CURRENT_TRACK,
    payload: track,
});

export const updatePlayState = () => ({
    type: TYPE.UPDATE_PLAYER_TRACK_STATE
});

export const setPlayState = (state) => ({
    type: TYPE.PLAY_TRACK,
    playState: !state,
});

export const setVolume = (percent) => ({
    type: TYPE.SET_VOLUME,
    volPercent: percent,
})

export function* getCurrentTrack() {
    const resp = yield call(fetchCurrentTrack);
    let trackData = resp.data;
    yield all([
        put(setPlayState(trackData && trackData.is_playing)),
        put(setCurrentTrack(trackData)),
    ]);
}

export function* updatePlayerState() {
    console.error('updatePlayerState>>>>>')
    const resp = yield call(pauseState);
    console.error('updatePlayerState>>>>>', resp)
}

export function setVolumePercent() {
    console.error('setVolumePercent>>>>>');
    playerVolume().then((resp) => {
        console.error(resp)
    });
}