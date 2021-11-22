import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from '../../pages/home'

const Main = () => {
  return (
    <div className="main">
      <Switch>
        <Route path="/" exact component={HomePage} />
      </Switch>
    </div>
  )
}

export default Main
