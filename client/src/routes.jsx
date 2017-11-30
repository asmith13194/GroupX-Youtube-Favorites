import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FavoritesPage from './components/FavoritesPage';
import SearchPage from './components/SearchPage';

export default (
  <main>

    <Switch>

      <Route exact path={'/'} component={SearchPage} />

      <Route exact path={'/favorites'} component={FavoritesPage} />

    </Switch>

  </main>
);
