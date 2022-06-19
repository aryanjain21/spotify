import "regenerator-runtime/runtime";

import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import { watcherSaga } from './saga';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware]

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

sagaMiddleware.run(watcherSaga);