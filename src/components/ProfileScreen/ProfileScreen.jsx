import React, { Component } from 'react';
import ProfileItem from '../ProfileItem/ProfileItem';
import styles from './ProfileScreen.module.css';

export default class ProfileScreen extends Component {
  render() {
    return (
      <div className={ styles.Profile }>
        <header>
          <div>
            <i className="fa-solid fa-angle-right"></i>
            <span>Profile</span>
          </div>
          <ProfileItem />
        </header>
      </div>
    )
  }
}
