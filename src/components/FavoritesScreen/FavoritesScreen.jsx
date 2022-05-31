import React, { Component } from 'react';
import { favorites, getFavorites } from '../../services/user';
import ProfileItem from '../ProfileItem/ProfileItem';
import styles from './FavoritesScreen.module.css';

export default class FavoritesScreen extends Component {
  state = {
    favorites: [],
  }

  componentDidMount() {
    this.setState({ favorites: getFavorites(), });
  }

  verifyFavorite = (music) => {
    const { favorites } = this.state;
    const some = favorites.some((favorite) => favorite.trackId === music.trackId);
    return some;
  }

  manageFavorites = (music) => {
    favorites(music);
    this.setState({ favorites: getFavorites(), });
  }

  render() {
    const { favorites } = this.state;
    return (
      <div className={ styles.Favorites }>
        <header>
          <div>
            <i className="fa-solid fa-angle-right"></i>
            <span>Favorites</span>
          </div>
          <ProfileItem />
        </header>
        <div className={ styles.favoritesContainer }>
          <h2>Favorites:</h2>
          <div>
            {
              favorites.map((music, index) => (
                <div key={ index }>
                  <div>
                    <i
                      className={`fa-solid fa-star ${ this.verifyFavorite(music) && styles.favorite }`}
                      onClick={ () => this.manageFavorites(music) }
                    />
                    <h4><strong>{ music.trackName }</strong> - { music.artistName }</h4>
                  </div>
                  <audio src={ music.previewUrl } controls>
                    <track kind="captions" />
                      O seu navegador não suporta o elemento <code>audio</code>.
                  </audio>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    )
  }
}
