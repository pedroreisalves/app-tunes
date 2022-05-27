import React, { Component } from 'react';
import propTypes from 'prop-types';
import logo from '../../images/music-app-icon.svg';
import styles from './SideBar.module.css';

export default class SideBar extends Component {
  verifyRoute = (route) => {
    const { history: { location: { pathname } } } = this.props;
    if (pathname.includes(route)) return styles.selectedRoute;
  }

  render() {
    const { history: { push }} = this.props;
    return (
      <div className={ styles.sideBar }>
        <div className={ styles.logoContainer }>
          <img src={ logo } alt="logo-icon" />
          <h3>App Tunes</h3>
        </div>
        <nav className={ styles.nav }>
          <div
            className={ `${styles.navItem} ${this.verifyRoute('/search')}` }
            onClick={ () => push('/search') }
          >
            <i className="fa-solid fa-magnifying-glass"></i>
            <h4>Search</h4>
          </div>
          <div
            className={ `${styles.navItem} ${this.verifyRoute('/favorites')}` }
            onClick={ () => push('/favorites') }
          >
            <i className="fa-solid fa-star"></i>
            <h4>Favorites</h4>
          </div>
          <div
            className={ `${styles.navItem} ${this.verifyRoute('/profile')}` }
            onClick={ () => push('/profile') }
          >
            <i className="fa-solid fa-user"></i>
            <h4>Profile</h4>
          </div>
        </nav>
      </div>
    )
  }
}

SideBar.propTypes = {
  history: propTypes.shape({
    location: propTypes.shape({
      pathname: propTypes.string,
    }).isRequired,
    push: propTypes.func.isRequired,
  }).isRequired
}