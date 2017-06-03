import { applyMiddleware, compose, createStore } from 'redux';

import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

export default function configureStore(initialState, rootReducer, rootSaga) {
    const middleware = [];
    const enhancers = [];

    const sagaMiddleware = createSagaMiddleware();
    middleware.push(sagaMiddleware);;

  	const logger = createLogger();
  	middleware.push(logger);

    enhancers.push(applyMiddleware(...middleware));

    const store = createStore(rootReducer, initialState, compose(...enhancers));

    sagaMiddleware.run(rootSaga);

    return store;
};