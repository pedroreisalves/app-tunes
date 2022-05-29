import React, { Component } from 'react';
import { getUser } from '../../services/user';
import defaultUser from '../../images/default-user.svg';
import styles from './ProfileItem.module.css';
import { Link } from 'react-router-dom';

export default class ProfileItem extends Component {
  render() {
    const profileObj = getUser();
    return (
      <Link to="/profile">
        <div className={ styles.Profile }>
          <p>{ profileObj.username }</p>
          <img src={ profileObj.icon || defaultUser } alt="profile-img" />
        </div>
      </Link>
    )
  }
}
