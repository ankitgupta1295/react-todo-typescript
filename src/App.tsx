import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './containers/Home'
import Todo from './containers/Todo'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/:userId' component={Todo} />
      </Switch>
    </Router>
  )
}

export default App