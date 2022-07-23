import { initialState } from "./initialState";
import { TYPE } from "./type";

export const getUser = () => ({
  type: TYPE.GET_USER,
});

export const setUser = (token) => ({
  type: TYPE.SET_USER,
  token: token,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPE.SET_USER: {
      console.error("reducer", action);
      const { token } = action;
      return { ...state, token: token };
    }
    default:
      return state;
  }
};
