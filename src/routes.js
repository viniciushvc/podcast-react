import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

import { Header, Footer, Player } from './components'

import { Home, Podcast } from './pages'

export default function Routes() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/podcast/:id" component={Podcast} />
      </Switch>
      <Footer />
      <Player />
    </Router>
  )
}
