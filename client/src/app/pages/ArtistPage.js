import React, { } from 'react';

import { ArtistList } from '../components/artist';

const ArtistPage = ({children}) => {
  return (
    <div className="page page--bookmarks">
      <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Bookmarks</h1>
            </div>
          </div>
        <ArtistList />
      </div>
    </div>
  );
};

export default ArtistPage;