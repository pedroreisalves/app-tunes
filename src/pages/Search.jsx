import React, { Component } from 'react';
import propTypes from 'prop-types';
import SideBar from '../components/SideBar/SideBar'

export default class Search extends Component {
  render() {
    const { history } = this.props;
    return (
      <>
        <SideBar history={ history } />
      </>
    )
  }
}

Search.propTypes = {
  history: propTypes.shape({}).isRequired,
}