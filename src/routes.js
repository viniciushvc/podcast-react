import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

import { Default } from '@/layouts'

import Player from '@/features/Player'

import { LazyRoute } from './components/utils'

export default function () {
  return (
    <Router>
      <Default>
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
      </Default>

      <Player />
    </Router>
  )
}
