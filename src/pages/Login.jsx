import React, { Component } from 'react';
import propTypes from 'prop-types';
import LoginScreen from '../components/LoginScreen/LoginScreen';

export default class Login extends Component {
  render() {
    const { history } = this.props;
    return (
      <LoginScreen history={ history } />
    )
  }
}

Login.propTypes = {
  history: propTypes.shape({}).isRequired,
}
