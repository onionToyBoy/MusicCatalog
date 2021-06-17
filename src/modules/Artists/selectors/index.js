export const selectArtists = state => state.artistsReducer.artists;

export const selectAlbums = artistId => state => state.artistsReducer.albums[artistId];

export const selectTracks = albumId => state => state.artistsReducer.tracks[albumId];
