import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './Root';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware,compose } from 'redux';
import reduxThunk  from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';
import {BrowserRouter}  from 'react-router-dom';

const createStoreWithMiddleware = compose(applyMiddleware(reduxThunk),
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined'
        ? window.devToolsExtension()
        : f => f)(createStore);

ReactDOM.render(
<BrowserRouter>
    <Provider store={createStoreWithMiddleware(reducers)}>
  <Root />
  </Provider>
</BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
