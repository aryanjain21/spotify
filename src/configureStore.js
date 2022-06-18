import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import "regenerator-runtime/runtime";
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { watcherSaga } from './saga';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware]

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

sagaMiddleware.run(watcherSaga);