import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Album from './pages/Album'
import Favorites from './pages/Favorites'
import Login from './pages/Login'
import Profile from './pages/Profile'
import ProfileEdit from './pages/ProfileEdit'
import Search from './pages/Search'

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/profile/edit" component={ ProfileEdit } />
        <Route path="/album/:id" component={ Album } />
        <Route path="/favorites" component={ Favorites } />
        <Route path="/profile" component={ Profile } />
        <Route path="/search" component={ Search } />
        <Route exact path="/" component={ Login } />
      </Switch>
    )
  }
}
