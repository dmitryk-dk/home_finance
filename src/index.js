import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const store = createStore(
    reducers,
    applyMiddleware(thunk),
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
