import { selectFavorites, selectFavoriteAlbums } from './index';

describe('Favorites selectors', () => {
  const collectionId = 635868640;

  const state = {
    favoriteAlbumsReducer: {
      favorites: {
        [collectionId]: {
          album: {
            collectionId,
            collectionName: 'The Best Hits',
            collectionPrice: 7.99,
            artworkUrl60: 'https://is5-ssl.mzstatic.com',
            artistName: 'Ёлка',
          },
          tracks: [
            { trackName: 'Pink', trackId: 1 },
            { trackName: 'Holy stain', trackId: 41 },
          ],
        },
      },
    },
  };

  test('selectFavorites selector should  return favorites', () => {
    const result = selectFavorites(state);

    expect(result).toBe(state.favoriteAlbumsReducer.favorites);
  });

  test('selectFavoriteAlbums selector should return favorite album', () => {
    const result = selectFavoriteAlbums(collectionId)(state);

    expect(result).toBe(state.favoriteAlbumsReducer.favorites[collectionId]);
  });
});
