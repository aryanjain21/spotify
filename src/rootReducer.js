import { combineReducers } from 'redux';

import BottomBarReducer from './containers/bottomBar/redux/reducer';
import LoginReducer from './containers/login/redux/reducer';


const rootReducer = combineReducers({
  user: LoginReducer,
  currentTrackDetails: BottomBarReducer,
})

export default rootReducer;