import {TYPE} from './type';
import {initialState} from './initialState'

export const getUser = () => ({
    type: TYPE.GET_USER
});

export const setUser = (user) => ({
    type: TYPE.SET_USER,
    user: user
});

export default (state = initialState, action) => {
    switch (action.type) {
        case TYPE.SET_USER: {
            const { user } = action;
            return { ...state, user: user };
        }
        default:
            return state;
    }
}