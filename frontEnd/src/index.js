import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// for ajax, this is promise middleware
// import reduxPromise from 'redux-promise';
// redux store, middleware
import { createStore, applyMiddleware } from 'redux';
// all reducers
import RootReducer from './reducers/RootReducer';
// provider combines redux and react
import { Provider } from 'react-redux';

const theStore = createStore(RootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={theStore}>
        <App />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
