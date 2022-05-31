import React, { Component } from 'react';
import propTypes from 'prop-types';
import SideBar from '../components/SideBar/SideBar'
import FavoritesScreen from '../components/FavoritesScreen/FavoritesScreen';

export default class Favorites extends Component {
  render() {
    const { history } = this.props;
    return (
      <>
        <SideBar history={ history } />
        <FavoritesScreen />
      </>
    )
  }
}

Favorites.propTypes = {
  history: propTypes.shape({}).isRequired,
}