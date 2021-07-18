export const selectFavorites = state => state.favoriteAlbumsReducer.favorites;

export const selectFavoriteAlbums = albumId => state =>
  state.favoriteAlbumsReducer.favorites[albumId];
