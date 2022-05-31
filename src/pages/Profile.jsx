import React, { Component } from 'react';
import propTypes from 'prop-types';
import SideBar from '../components/SideBar/SideBar'
import ProfileScreen from '../components/ProfileScreen/ProfileScreen';

export default class Profile extends Component {
  render() {
    const { history } = this.props;
    return (
      <>
        <SideBar history={ history } />
        <ProfileScreen />
      </>
    )
  }
}

Profile.propTypes = {
  history: propTypes.shape({}).isRequired,
}