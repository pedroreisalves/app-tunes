import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import homeImage from '../../images/home-image.svg';
import { getAlbum } from '../../services/artist';
import ProfileItem from '../ProfileItem/ProfileItem';
import styles from './SearchScreen.module.css';

export default class SearchScreen extends Component {
  state = {
    search: '',
    albuns: [],
  }

  setAlbuns = async (search) => {
    const albuns = await getAlbum(search);
    this.setState({ albuns, search: '' });
  }

  render() {
    const { search, albuns } = this.state;
    return (
      <div className={ styles.searchScreen }>
        <div className={ styles.searchBar }>
          <header>
            <div>
              <i className="fa-solid fa-angle-right"></i>
              <span>Search</span>
            </div>
            <ProfileItem />
          </header>
          <div>
            <label htmlFor="search">
              <input
                value={ search }
                onChange={ ({ target }) => this.setState({[target.id]: target.value}) }
                onKeyUp={
                  ({ key }) => (key === 'Enter' && search.length >= 2)
                  && this.setAlbuns(search)
                }
                placeholder="Search for some artist"
                id="search"
                type="text"
              />
              <button
                disabled={ search.length < 2 }
                onClick={ () => this.setAlbuns(search) }
              >
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </label>
          </div>
        </div>
        <div className={ styles.albunsContainer }>
            {
              !albuns.length
              && (
                <div className={ styles.startImage }>
                  <img src={ homeImage } alt="homeImage" />
                  <h2>Look for something different and discover new feelings.</h2>
                </div>
              )
            }
            {
              albuns.map((album, i) => (
                <Link key={ i } to={`/album/${album.collectionId}`}>
                  <div
                    className={ styles.album }
                  >
                    <img src={ album.artworkUrl100 } alt="album-cover" />
                    <div>
                      <h4>{ album.artistName }</h4>
                      <p>{ album.collectionName }</p>
                    </div>
                  </div>
                </Link>
              ))
            }
          </div>
      </div>
    )
  }
}
