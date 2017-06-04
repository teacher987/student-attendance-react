import React, { Component } from 'react';
import { Provider } from 'react-redux';

import createStore from './redux';

import Classroom from './containers/Classroom';
import IconDefinitions from './components/IconDefinitions';

const store = createStore({});

class App extends Component {
    render() {
        return (
        	<div>
            	<Provider store={store}>
                	<Classroom />
            	</Provider>
            	<IconDefinitions />
            </div>
        );
    }
}

export default App;
