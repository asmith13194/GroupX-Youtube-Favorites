import React, { Component } from 'react';
// import logo from './logo.svg';
// import './stylesheets/css/App.css';

import routes from './routes';
import reducers from './reducers';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import createBrowserHistory from 'history/createBrowserHistory';

const createStoreWithMiddleware = applyMiddleware(promise(), thunk, createLogger())(createStore);
// const middleware = applyMiddleware(promise(), thunk, createLogger());
// const store = createStore(reducers, middleware)

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>

          <Router history={history}>

              {routes}

          </Router>

      </Provider>
    );
  }
}

export default App;
