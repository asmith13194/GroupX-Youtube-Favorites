import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import routes from './routes';
import reducers from './reducers';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import createBrowserHistory from 'history/createBrowserHistory';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

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
