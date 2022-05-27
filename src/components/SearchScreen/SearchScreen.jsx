import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getAlbum } from '../../services/album';
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
            <div><i className="fa-solid fa-angle-right"></i>Search</div>
            <ProfileItem />
          </header>
          <div>
            <label htmlFor="search">
              <input
                value={ search }
                onChange={ ({ target }) => this.setState({[target.id]: target.value}) }
                placeholder="Search for some artist"
                id="search"
                type="text"
              />
              <button
                disabled={ search.length <= 2 }
                onClick={ () => this.setAlbuns(search) }
              >
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </label>
          </div>
        </div>
        <div className={ styles.albunsContainer }>
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
