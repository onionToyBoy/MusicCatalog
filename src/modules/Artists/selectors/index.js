export const selectArtists = state => state.artistReducer.artists;

export const selectAlbums = artistName => state => state.albumReducer.albums[artistName];

export const selectTracks = state => state.trackReducer.tracks;
