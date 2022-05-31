import React, { Component } from 'react';
import propTypes from 'prop-types';
import { getUser, editUser } from '../../services/user';
import ProfileItem from '../ProfileItem/ProfileItem';
import styles from './ProfileEditScreen.module.css';

export default class ProfileEditScreen extends Component {
  state={
    username: getUser().username,
    email: getUser().email,
    description: getUser().description,
    icon: getUser().icon,
  }

  verify = (email, username) => {
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    return !(emailRegex.test(email) && username.length >= 3);
  }

  render() {
    const { description, email, icon, username } = this.state;
    const { history: { push } } = this.props;
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
        <div className={ styles.editContainer }>
          <h2>Edit Profile:</h2>
          <div className={ styles.form }>
            <label htmlFor="username">
              Username:
              <input
                onChange={ ({ target }) => this.setState({ username: target.value }) }
                type="text"
                id="username"
                value={ username }
              />
            </label>
            <label htmlFor="email">
              Email:
              <input
                onChange={ ({ target }) => this.setState({ email: target.value }) }
                type="text"
                id="email"
                value={ email }
              />
            </label>
            <label htmlFor="description">
              Description:
              <input
                onChange={ ({ target }) => this.setState({ description: target.value }) }
                type="text"
                id="description"
                value={ description }
              />
            </label>
            <label htmlFor="icon">
              Icon:
              <input
                onChange={ ({ target }) => this.setState({ icon: target.value }) }
                type="text"
                id="icon"
                value={ icon }
              />
            </label>
            <button
              disabled={ this.verify(email, username) }
              onClick={ () => {editUser(email, username, icon, description); push('/profile')} }
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    )
  }
}

ProfileEditScreen.propTypes = {
  history: propTypes.shape({ push: propTypes.func.isRequired }).isRequired,
}