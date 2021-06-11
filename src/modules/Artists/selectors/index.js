export const selectArtists = state => state.artistReducer.artists;

export const selectAlbums = artistId => state => state.albumReducer.albums[artistId];

export const selectTracks = state => state.trackReducer.tracks;
