import { combineReducers } from 'redux';
import LoginReducer from './containers/login/redux/reducer';

const rootReducer = combineReducers({
  user: LoginReducer,
})

export default rootReducer;