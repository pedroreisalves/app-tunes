import React, { Component } from 'react';
import propTypes from 'prop-types';
import styles from './LoginScreen.module.css';
import { setUser } from '../../services/user';
import logo from '../../images/music-app-icon.svg';

export default class LoginScreen extends Component {
  state = {
    username: '',
    email: '',
  }

  verify = (email, username) => {
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    return !(emailRegex.test(email) && username.length >= 6);
  }

  login = (email, username) => {
    const { history: { push } } = this.props;
    setUser(email, username);
    push('/search');
  }

  render() {
    const { email, username } = this.state;
    return (
      <div className={ styles.loginContainer }>
        <img src={ logo } alt="logo-icon" />
        <div>
          <div>
            <h2>Welcome Back</h2>
            <p>Enter your credentials to access your account.</p>
          </div>
          <form>
            <label htmlFor="username">
              <i className="fa-solid fa-user"></i>
              <input
                value={ username }
                type="text"
                onChange={ ({ target }) => this.setState({ [target.id]: target.value }) }
                id="username"
                placeholder="Enter your username"
              />
            </label>
            <label htmlFor="email">
              <i className="fa-solid fa-envelope"></i>
              <input
                value={ email }
                type="text"
                id="email"
                onChange={ ({ target }) => this.setState({ [target.id]: target.value }) }
                placeholder="Enter your email"
              />
            </label>
            <button
              type="button"
              disabled={ this.verify(email, username) }
              onClick={ () => this.login(email, username) }
            >
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }
}

LoginScreen.propTypes = {
  history: propTypes.shape({
    push: propTypes.func.isRequired,
  }).isRequired,
}
