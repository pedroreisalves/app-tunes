import React, { Component } from 'react';
import ProfileItem from '../ProfileItem/ProfileItem';
import styles from './ProfileEditScreen.module.css';

export default class ProfileEditScreen extends Component {
  render() {
    return (
      <div className={ styles.Edit }>
        <header>
          <div>
            <i className="fa-solid fa-angle-right"></i>
            <span>Profile</span>
            <i className="fa-solid fa-angle-right"></i>
            <span>Edit</span>
          </div>
          <ProfileItem />
        </header>
      </div>
    )
  }
}
