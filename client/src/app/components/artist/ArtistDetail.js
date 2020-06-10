import React, { useEffect, useState, Fragment } from 'react';
import { useFirestore } from '../../services';
import { Link, NavLink  } from 'react-router-dom';
import * as Routes from '../../routes';


import './ArtistDetail.scss';

const ArtistDetail = ({artist}) => {
  const backgroundDetail = (x) => {
    document.body.style.backgroundImage = `url(${x})`;
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundAttachment = "fixed";
    
  }
  return (
    <div className="container">
      <Link className="back" to={Routes.HOME}>Go back</Link>
      {console.log(artist)}
      {!!artist
      ? 
        (
          <div key={artist.uid}>
             {backgroundDetail(artist.picture_back)}
            <div data-id={artist.uid}>
              <div className="row">
              <div className="col-8 artistInfo">
              <iframe src={'https://www.youtube.com/embed/'+ artist.yt} ></iframe>
              <h1>{artist.name}</h1>
              <h3>{artist.stage}</h3>
              </div>
              <div className="col-4 sideInfo">
                <img src={artist.logo}></img>
                <h2>Latest albums</h2>
                <ul id='padding'>{artist.albums.map(x => <li>{x}</li>)}</ul>
              </div>
              </div>
              <div id="padding" className="bio col-12">
              <h1>Biography</h1>
              <p>{artist.bio}</p>
              </div>

              <div className="musicLinks">
              <div>
                <h2>Spotify</h2>
                <a target="_blank" href={artist.spotify_music}><button>Listen now!</button></a>
              </div>
              <div>
                <h2>SoundCloud</h2>
                <a target="_blank" href={artist.soundcloud_music}><button>Listen now!</button></a>
              </div>
              <div>
                <h2>Deezer</h2>
                <a target="_blank" href={artist.deezer_music}> <button>Listen now!</button></a>
              </div>
              </div>

              <div className="button detailButton">
                <Link to={Routes.TICKETS}><button className="tickets">Buy Tickets</button></Link> 
              </div>

            </div>
          </div>
        )
      : <p>No artist.</p>
      }
    </div>
  )
};

export default ArtistDetail;