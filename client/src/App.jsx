import React, { Component } from 'react';
import routes from './routes';
import reducers from './reducers';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
// import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import createBrowserHistory from 'history/createBrowserHistory';

//action logger for development
// const createStoreWithMiddleware = applyMiddleware(
//   promise(),
//   thunk,
//   createLogger()
// )(createStore);

const createStoreWithMiddleware = applyMiddleware(
  promise(),
  thunk,
)(createStore);

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
