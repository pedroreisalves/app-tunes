import React, { Component } from 'react';
import propTypes from 'prop-types';
import SideBar from '../components/SideBar/SideBar';
import AlbumScreen from '../components/AlbumScreen/AlbumScreen';

export default class Album extends Component {
  render() {
    const { history, match } = this.props;
    return (
      <>
        <SideBar history={ history } />
        <AlbumScreen match={ match } />
      </>
    )
  }
}

Album.propTypes = {
  history: propTypes.shape({}).isRequired,
}