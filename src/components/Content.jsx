import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomeContainer from '../containers/content/HomeContainer'
import CountryContainer from '../containers/content/CountryContainer'


class Content extends React.Component {
  render() {
    return (
      <Switch>
        <Route component={HomeContainer} exact path="/"/>
        <Route component={CountryContainer} path="/country/:country" />
      </Switch>
    )
  }
}

export default Content