import React, { Component } from 'react';
import { Provider } from 'react-redux';

import createStore from './redux';

import Classroom from './containers/Classroom';

const store = createStore({});

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Classroom />
            </Provider>
        );
    }
}

export default App;
