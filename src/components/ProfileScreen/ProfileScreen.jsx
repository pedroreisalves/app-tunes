import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../../services/user';
import defaultUser from '../../images/default-user.svg';
import ProfileItem from '../ProfileItem/ProfileItem';
import styles from './ProfileScreen.module.css';

export default class ProfileScreen extends Component {
  state = {
    user: getUser(),
  }

  render() {
    const { user } = this.state;
    return (
      <div className={ styles.Profile }>
        <header>
          <div>
            <i className="fa-solid fa-angle-right"></i>
            <span>Profile</span>
          </div>
          <ProfileItem />
        </header>
        <div className={ styles.userInfo }>
          <div>
            <div className={ styles.editProfile }>
              <Link to="/profile/edit">
                <button><i className="fa-solid fa-user-pen"></i></button>
              </Link>
            </div>
            <img src={ user.icon || defaultUser } alt={ user.username } />
            <h1>{ user.username }</h1>
            <p>Favorites: { user.favorites.length } { user.favorites.length === 1 ? 'Song' : 'Songs' }</p>
            <p>Email: { user.email }</p>
            <p>Description: { user.description }</p>
          </div>
        </div>
      </div>
    )
  }
}
