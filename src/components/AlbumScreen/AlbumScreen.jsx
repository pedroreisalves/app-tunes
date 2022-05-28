import React, { Component } from 'react';
import { getMusics } from '../../services/album';
import ProfileItem from '../ProfileItem/ProfileItem';
import styles from './AlbumScreen.module.css';

export default class AlbumScreen extends Component {
  state = {
    musics: [],
    album: {},
  }

  componentDidMount() {
    this.getAlbum();
  }

  getAlbum = async () => {
    const { match: { params: { id } } } = this.props;
    let musics = await getMusics(id);
    const album = musics[0];
    musics = musics.filter((music, index) => index > 0);
    this.setState({ musics, album });
  }

  render() {
    const { musics, album } = this.state;
    return (
      <div className={ styles.Album }>
        <header>
          <div>
            <i className="fa-solid fa-angle-right"></i>
            <span>Search</span>
            <i className="fa-solid fa-angle-right"></i>
            <span>{ album.collectionName }</span>
          </div>
          <ProfileItem />
        </header>
        <div className={ styles.albunsContainer }>
          <div>
            <img src={ album.artworkUrl100 } alt="cover-album" />
            <div>
              <h3>{ album.collectionName }</h3>
              <p>{ album.artistName }</p>
              <p>{ album.primaryGenreName }</p>
            </div>
          </div>
          <div>
            {
              musics.map((music, index) => (
                <div key={ index }>
                  <h4>{ music.trackName }</h4>
                  <audio data-testid="audio-component" src={ music.previewUrl } controls>
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
