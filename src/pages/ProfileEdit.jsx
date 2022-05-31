import React, { Component } from 'react'
import ProfileEditScreen from '../components/ProfileEditScreen/ProfileEditScreen';
import SideBar from '../components/SideBar/SideBar';
import propTypes from 'prop-types';

export default class ProfileEdit extends Component {
  render() {
    const { history } = this.props;
    return (
      <>
        <SideBar history={ history } />
        <ProfileEditScreen />
      </>
    )
  }
}

ProfileEdit.propTypes = {
  history: propTypes.shape({}).isRequired,
}
