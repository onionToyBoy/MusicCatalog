export const selectArtists = state => state.artistReducer.artists;

export const selectAlbums = artistName => {
  return function (state) {
    return state.albumReducer.albums[artistName];
  };
};

export const selectTracks = state => state.trackReducer.tracks;
