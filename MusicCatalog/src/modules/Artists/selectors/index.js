export const selectArtists = state => state.search.artists;

export const selectAlbums = state => state.goToAlbums.albums.results;

export const selectTracks = state => state.goToTracks.tracks.results;
