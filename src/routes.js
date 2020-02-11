import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

import { Logo } from './components'

import { Home, Podcast } from './pages'

export default function Routes() {
  return (
    <Router>
      <Logo />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/podcast/:id" component={Podcast} />
      </Switch>
    </Router>
  )
}
