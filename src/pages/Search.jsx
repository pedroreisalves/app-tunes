import React, { Component } from 'react';
import propTypes from 'prop-types';
import SideBar from '../components/SideBar/SideBar'
import SearchScreen from '../components/SearchScreen/SearchScreen';

export default class Search extends Component {
  render() {
    const { history } = this.props;
    return (
      <>
        <SideBar history={ history } />
        <SearchScreen />
      </>
    )
  }
}

Search.propTypes = {
  history: propTypes.shape({}).isRequired,
}