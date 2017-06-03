import { combineReducers } from 'redux';

import configureStore from './configureStore';

import rootSaga from '../sagas';

export default initialState => {
    const rootReducer = combineReducers({
        'app': require('./app').reducer,

        'students': require('./students').reducer,
    });

    return configureStore(initialState, rootReducer, rootSaga);
}
