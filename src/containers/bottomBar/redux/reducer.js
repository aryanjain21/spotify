import { initialState } from "./initialState";
import { TYPE } from "./type";

export const getCurrentPlay = () => ({
    type: TYPE.GET_CURRENTLY_PLAY_TRACK,
});

export const setCurrentTrack = (track) => ({
    type: TYPE.SET_CURRENT_TRACK,
    token: track,
});

const BottomBarReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPE.SET_CURRENT_TRACK: {
            return { ...state, currentTrack: action.payload };
        }
        case TYPE.PLAY_TRACK: {
            return { ...state, isPlay: action.playState };
        }
        case TYPE.SET_VOLUME: {
            return { ...state, volume: action.volPercent };
        }
        default:
            return state;
    }
};

export default BottomBarReducer;