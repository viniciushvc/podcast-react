import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

import { Header, Footer, Player } from './components/base'

import { LazyRoute } from './components/utils'

export default function () {
  return (
    <Router>
      <Header />
      <Switch>
        <Route
          path="/"
          exact
          component={LazyRoute(() => import('./pages/Home'))}
        />
        <Route
          path="/podcast/:id"
          component={LazyRoute(() => import('./pages/Podcast'))}
        />
        <Route
          path="**"
          component={LazyRoute(() => import('./pages/NotFound'))}
        />
      </Switch>
      <Footer />
      <Player />
    </Router>
  )
}
