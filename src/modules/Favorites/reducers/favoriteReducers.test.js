import { favoriteAlbumsReducer, INITIAL_STATE } from './index';
import {
  setFavoriteAlbum,
  removeFavoriteAlbum,
  setFavoriteTrack,
  removeFavoriteTrack,
} from '../actions';

describe('Favorites reducer', () => {
  const album = { albumName: 'The fat of the land', albumId: 15 };

  const albumId = 0;
  const trackId = 21;

  const defaultState = {
    ...INITIAL_STATE,
    favorites: {
      [albumId]: {
        album: { albumName: 'Angelo', albumId: 5443 },
        tracks: [{ trackName: 'Fly', trackId: 3221 }],
      },
    },
  };

  const tracks = [
    { trackName: 'Pink', trackId: 1 },
    { trackName: 'Holy stain', trackId: 41 },
  ];

  const track = { trackName: 'Affection', trackId: 451 };

  test('setFavoriteAlbum should not change previous data in state', () => {
    const expectedState = {
      ...defaultState,
      favorites: {
        ...defaultState.favorites,
        [albumId]: {
          album,
          tracks,
        },
      },
    };
    const newState = favoriteAlbumsReducer(defaultState, setFavoriteAlbum(albumId, tracks, album));

    expect(newState).toEqual(expectedState);
  });

  test('setFavoriteTrack should not change previous data in state', () => {
    const newTracks = defaultState.favorites[albumId].tracks;
    newTracks.push(track);
    const expectedState = {
      ...defaultState,
      favorites: {
        ...defaultState.favorites,
        [albumId]: {
          album,
          tracks: newTracks,
        },
      },
    };
    const newState = favoriteAlbumsReducer(defaultState, setFavoriteTrack(albumId, album, track));

    expect(newState).toEqual(expectedState);
  });

  test('removeFavoriteAlbum should remove album from favorites', () => {
    const { [albumId]: removedAlbum, ...albums } = defaultState.favorites;
    const expectedState = {
      ...defaultState,
      favorites: albums,
    };
    const newState = favoriteAlbumsReducer(defaultState, removeFavoriteAlbum(albumId));

    expect(newState).toEqual(expectedState);
  });

  test('favoriteAlbumsReducer should remove track', () => {
    const newTracks = defaultState.favorites[albumId].tracks.filter(el => el.trackId !== trackId);
    const { [albumId]: removedAlbum } = defaultState.favorites;
    const newFavorites = {
      ...defaultState.favorites,
      [albumId]: {
        ...removedAlbum,
        tracks: newTracks,
      },
    };
    const expectedState = {
      ...defaultState,
      favorites: newFavorites,
    };
    const newState = favoriteAlbumsReducer(defaultState, removeFavoriteTrack(albumId, trackId));

    expect(newState).toEqual(expectedState);
  });

  test('favoriteAlbumsReducer should remove track and album ID', () => {
    const state = {
      ...INITIAL_STATE,
      favorites: {
        [albumId]: {
          album: { albumName: 'Angelo', albumId: 5443 },
          tracks: [{ trackName: 'Fly', trackId }],
        },
      },
    };
    const { [albumId]: removedAlbum, ...albums } = state.favorites;
    const expectedState = {
      ...state,
      favorites: albums,
    };
    const newState = favoriteAlbumsReducer(state, removeFavoriteTrack(albumId, trackId));

    expect(newState).toEqual(expectedState);
  });

  test('Default section should return initial state', () => {
    const newState = favoriteAlbumsReducer(INITIAL_STATE, {});

    expect(newState).toBe(INITIAL_STATE);
  });
});
