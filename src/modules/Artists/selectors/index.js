export const selectArtists = state => state.artistReducer.artists;

export const selectAlbums = artistId => state => state.albumReducer.albums[artistId];

export const selectTracks = albumId => state => state.trackReducer.tracks[albumId];

export const loadingStatus = state => state.loadingReducer.loading;

export const error = state => state.errorReducer.error;
